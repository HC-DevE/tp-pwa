import { clientsClaim } from 'workbox-core'
import { precacheAndRoute, cleanupOutdatedCaches, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';

self.skipWaiting();
clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

try {
    const handler = createHandlerBoundToURL('/');
    const route = new NavigationRoute(handler);
    registerRoute(route);
} catch (error) {
    console.warn('Error while registering cache route', { error });
}