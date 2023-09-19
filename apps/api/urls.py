from django.urls import path, include
from .views import BlogVS, OrderItemVS, PostVS, ReviewVS, BookVS, OrderVS
from django.utils.translation import gettext_lazy as _
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('bookvs', BookVS, basename='bookvs')
router.register('ordervs', OrderVS, basename='ordervs')
router.register('blogvs', BlogVS, basename='blogvs')
router.register('postvs', PostVS, basename='postvs')
router.register('reviewvs', ReviewVS, basename='reviewvs')
router.register('itemvs', OrderItemVS, basename='itemvs')


urlpatterns = [
    path('', include(router.urls)),
]
