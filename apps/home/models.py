from django.db import models

# Create your models here.

class Contact(models.Model):
    message = models.TextField()
    name = models.CharField(max_length=50)
    subject = models.CharField(max_length=150)
    email = models.EmailField(max_length=50, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


    class Meta:
        ordering = ['-created_at']
        
    def __str__(self):
        return self.name