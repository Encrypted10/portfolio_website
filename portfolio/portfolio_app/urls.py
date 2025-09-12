from django.urls import path, include
from . import views
from .views import google_verification

urlpatterns = [
    path("", views.portfolio, name="portfolio"),
    path('google906ecfcb3556e71a.html', google_verification, name='google_verification'),
]
