from django.shortcuts import render,redirect
from .models import Skill,About,TimelineEntry,Profile,Internship,Project,Certificate
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

# Create your views here.
# def home(request):
#     return render(request, "portfolio_app/index.html")


# def portfolio(request):
#     skills = Skill.objects.all()
#     about = About.objects.first()
#     return render(request, "index.html", {"skills": skills,"about":about})



def portfolio(request):
    skills = Skill.objects.all()
    about = About.objects.first()
    education = TimelineEntry.objects.filter(entry_type="education").order_by('-start_year')
    experience = TimelineEntry.objects.filter(entry_type="experience").order_by('-start_year')
    profile = Profile.objects.first()
    internships = Internship.objects.all()
    projects = Project.objects.all()
    certificates = Certificate.objects.all()

    context = {
        "skills": skills,
        "about": about,
        "education": education,
        "experience": experience,
        "profile": profile,
        "internships": internships,
        "projects": projects,
        "certificates" : certificates,
    }
    return render(request, "portfolio_app/index.html", context)



