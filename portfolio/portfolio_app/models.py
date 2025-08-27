from django.db import models


# Create your models here.
class Skill(models.Model):
    name = models.CharField(max_length=100)
    percentage = models.PositiveIntegerField(help_text="Skill percentage (0 to 100)")
    color = models.CharField(max_length=7, default="#4fcc2a", help_text="Color for progress circle")

    class Meta:
        ordering = ['-percentage']  # Highest skill first
        verbose_name = "Skill"
        verbose_name_plural = "Skills"

    def __str__(self):
        return f"{self.name} ({self.percentage}%)"
    






class About(models.Model):
    content = models.TextField()  # About text
    image = models.ImageField(upload_to="about/", blank=True, null=True)  # About image
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "About Section"
    


class TimelineEntry(models.Model):
    ENTRY_TYPE_CHOICES = [
        ("education", "Education"),
        ("experience", "Experience"),
    ]
    entry_type = models.CharField(max_length=16, choices=ENTRY_TYPE_CHOICES)
    title = models.CharField(max_length=255)
    organization = models.CharField(max_length=255, blank=True)
    start_year = models.PositiveIntegerField(blank=True, null=True)
    end_year = models.PositiveIntegerField(blank=True, null=True)
    description = models.TextField(blank=True)
    icon_image = models.ImageField(upload_to='timeline_icons/', blank=True, null=True)

    class Meta:
        ordering = ["-start_year", "-end_year"]

    def __str__(self):
        return f"{self.get_entry_type_display()}: {self.title}"

class Profile(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    profile_image = models.ImageField(upload_to='profile_images/')
    cta_text = models.CharField(max_length=100, default="Let's get started →")
    cta_link = models.URLField(blank=True, null=True)  # Optional link for button

    def __str__(self):
        return self.name

class Internship(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='internship_logos/')
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['display_order']

    def __str__(self):
        return self.name
    


class Project(models.Model):
    title = models.CharField(max_length=255)  # Optional: project title for easy ID
    image = models.ImageField(upload_to='project_images/')
    link = models.URLField(blank=True, null=True)  # Optional URL to project/demo
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title
    


    
class Certificate(models.Model):
    title = models.CharField(max_length=255)  # Certificate name [web:5]
    issuer = models.CharField(max_length=255)  # Organization or authority [web:5]
    issue_date = models.DateField()  # Date issued [web:5]

    certificate_image = models.ImageField(upload_to='certificates/', blank=True, null=True)  # Optional image file [web:5]

    def __str__(self):
        return f"{self.title} ({self.issuer})"