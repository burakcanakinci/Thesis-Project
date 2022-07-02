from django.contrib import admin
from django.urls import path, include        # add this
from django.conf import settings             # add this
from django.conf.urls.static import static   # add this

from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include('core.urls')),
    path('accounts/', include('accounts.urls')),
    path('', include('djoser.urls.authtoken')),
]

# add this
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)