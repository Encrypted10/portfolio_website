from django.urls import path
from . import views
from .views import google_verification
from django.contrib.sitemaps.views import sitemap
from sitemaps import StaticViewSitemap

sitemaps = {
    'static': StaticViewSitemap,
}

urlpatterns = [
    path("", views.portfolio, name="portfolio"),
    path('google906ecfcb3556e71a.html', google_verification, name='google_verification'),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='sitemap'),
]
