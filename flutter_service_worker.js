'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "33a08d55bb2daf7d6a67a63723a1c93b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fe6a2489b54f8a25d273c6cf61e3101b",
".git/HEAD": "0ce6403a6ce600a65449f58beb160a0c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9f3a9ae0d254cbc032a1e8247883b4dd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd49242403eb35e4218a06ae88759255",
".git/logs/refs/heads/master": "d898960659fb5d69acc8947353070984",
".git/logs/refs/heads/test": "c92dd8bdc5a45b845f7ec2752b3efa2c",
".git/logs/refs/remotes/fire_web/master": "50bbf3dc7aaf3a55b2b90ca11dc3352c",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/04/874faf16048e684b41cae45d704745a65c677e": "4efc152491f979ce792259cf0feaab37",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/18/57688b9f47e2f749a8183b2ed97fc1d66677b7": "f60eb0be4ccde7b524bfb03fdaecee69",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/32/4e1385a1603c3777e2b1ada99dfc2890e7f510": "f8174c8546b4e71e18228c92c166376d",
".git/objects/34/3f4b31921488fe8e007299c9fbd7b9aa48c426": "2a6f20ee980aa6319e72613fc6486748",
".git/objects/34/de46755fcf3306739ecba86cba5edb0aedb8eb": "307aaa1723dfee16dce6ea7b19867393",
".git/objects/36/20c36a0910aab9c6c5ac7c6da4102e9fe1dc35": "0128df893efcffaf8cbef66efb56f255",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/88dc135ee37a49a41129eada30dcbc6f2e3e37": "a786f01d19769e3e86935d17c614b099",
".git/objects/53/d1585b807582eb6e3565577598f1be1bf88a89": "40e4b0c046e0715eac7df46177c62480",
".git/objects/5a/0c92c4fb7b45443dbf01dec025d86043fa6f8f": "73579646feb07845be32c7b13e60dd25",
".git/objects/60/5a60726c898642436720dd13327bee95fb51ab": "f5513019efb11e05a434e87b83ea8124",
".git/objects/6a/a80b9aeb41c08ad4ac397bef62ad6db1cb1069": "f6903a080b0ea3d4e550b20f74e84fdd",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/9dfa044d022f5ca8cf9191e37fef926dd67f77": "7727ae4eaab69538f1d040373bf4867d",
".git/objects/7e/685ba847ef942ce1757d7a2c1f5eae6de41dc0": "cf34175085d18c717e407a13b06ab32d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/1643c571132c36f883bda124c3fdfe7a638200": "af1025490632edcab20bdf1755853d3a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b4/92baed22c3354b089678b81665107b7e03b35f": "98a10b144526df1ee00c0943d0f17e24",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1680dd3c3b24c1128fff01cdc7ceb0b93034a3": "2635a1101cb06a57a5f47801962d3de6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/8421e0cdbca613374931d6f4376f2d6fd75550": "c7681079fd708fa36dcfeeb36d0b71d2",
".git/objects/c9/ae6d931c9662dcdd4c23fbba172c37e3790c5b": "0d9e9f06d6c939c463ec5f7a8bfcda68",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d2/8c1aa8841365d6d98f49e6f860f5dde2d6d35a": "8d189f5cd9bffbb93e19cb0ed5936de3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a6b11e8b76d049b09e671066d9627529eab463": "6486f168057422bda0c588eab6fb4388",
".git/objects/ee/13d24ef2c07acef40fefd369be5c284926cfb9": "73bbbf12899f47a0447b49e18185ef45",
".git/objects/f1/e8042a1960bd56bd5f2feb13faca75869747ef": "08a4a31158dabedc35496af034b4fde3",
".git/objects/fc/c3ef48fea9465d60757de4063cf65c54dff9c5": "9c2ae4ac7f4f6019f0d719df7d030ce0",
".git/objects/fd/3d9af3d208bc1df59c83c9501d0d617fa9a6cf": "1da8f46f753d2f1927ab173cf7099d89",
".git/ORIG_HEAD": "679ae2ff529e3351c7aab49ba638c6e0",
".git/refs/heads/master": "679ae2ff529e3351c7aab49ba638c6e0",
".git/refs/heads/test": "679ae2ff529e3351c7aab49ba638c6e0",
".git/refs/remotes/fire_web/master": "679ae2ff529e3351c7aab49ba638c6e0",
".vscode/launch.json": "06d01835e8949506d1f65d0f9fe4f3d7",
"assets/AssetManifest.json": "e63aed2b8e30ed461292da17b5e01e01",
"assets/assets/fonts/SF-Pro-Italic.ttf": "05f2ccddb258f5dfb25aa965a4a2ca43",
"assets/assets/fonts/SF-Pro.ttf": "b00758ffdb3216ea93c6fc6957aa2cfa",
"assets/assets/images/img.png": "5fc51120c6f6ea4ee915865d9427199a",
"assets/FontManifest.json": "320f7c06b3287d8deb327bf2f6fbc7f0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/load.gif": "a6cd4c512234b8b546bf806d19cbba5c",
"assets/NOTICES": "82850980dbfe7a407a63cd626cb331a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "d889a556d4a644babca33049af9e15f0",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "a53d1e7ec753afbebf3df265bf65df58",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7d81d07d6818acb71f09ef1a659e0ffe",
"/": "7d81d07d6818acb71f09ef1a659e0ffe",
"main.dart.js": "93cddb5e5b4413d21d561993bddc093e",
"manifest.json": "458bc4f08f7c23035ba01d89ab3620c1",
"version.json": "3ed45caaf369686acefacb42d28d01c7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
