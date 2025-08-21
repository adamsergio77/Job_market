from django.db import models
from django.contrib.auth.models import User


class Offer(models.Model):

    CATEGORY = (
        ('WYOKŃCZENIA', 'Wykończenia'),
        ('PRACE OGÓLNOBUOWLANE', 'Prace ogólnobuowlane'),
        ('REMONTY', 'Remonty'),
        ('PRACE ZIEMNE', 'Prace ziemne'),
        ('OGRODNICTWO', 'Ogrodnictwo')
    )
    title = models.CharField(max_length=100, default='')
    content = models.TextField()
    category = models.CharField(choices=CATEGORY, max_length=30, default='Remonty')
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='offers')

    def __str__(self):
        return self.title
