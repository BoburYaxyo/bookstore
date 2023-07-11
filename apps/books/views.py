from django.shortcuts import render

# Create your views here.

def learn_once(request):
    
    return render(request, 'learn-once-read-everywhere/index.html')

def from_one(request):
    
    return render(request, 'from-one-fiction-reader-to-another/index.html')

def fantasy_one(request):
    
    return render(request, 'fantasy-in-words-and-pages/index.html')

def adventure(request):
    
    return render(request, 'product-category/adventure-stories/index.html')