from django.contrib.sitemaps import Sitemap
from django.urls import reverse
from portfolio_app.models import *


class StaticViewSitemap(Sitemap):
    priority = 0.5
    changefreq = 'weekly'

    def items(self):
        # List of URL names to include in sitemap
        return ["portfolio"]

    def location(self, item):
        return reverse(item)
