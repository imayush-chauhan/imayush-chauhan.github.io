'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "44b03e187c89f2191df52cba64a1c880",
".git/config": "09f096a7fa0a7c4bf098ba9b51d2e6e1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "0ebea50ee4e27b938bcc03d011f36f73",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2ba6c0eec8229df7020724672170a364",
".git/logs/refs/heads/main": "1297bfbec9c2331462cc0329fe65cfab",
".git/logs/refs/remotes/origin/main": "8bb9e9051dd9b08162f1f078180d0dfc",
".git/objects/07/f5cb5da27d081af28b59a1c80356882e0bb106": "ae295630baec4b66a9e19e1f0120f6bc",
".git/objects/08/aa9940b1364df685cdd9a2ccede125d7b9cdd4": "b91fb008b99748a399f72dd89e6b4724",
".git/objects/0b/cac2ee4cdb34703d670210e66225cb1657c519": "95aaa9e9d9387cbeeca892995c50ea32",
".git/objects/0b/f06d27229967709e5c2eb89820a4b7be42a36b": "7fca73a55bbcff691c3ccd64a5a87b57",
".git/objects/10/d7db09dbedd021763ada40d8cacb409a98e8c9": "738d60eb14d9ffb5a737f15c2ad8068e",
".git/objects/12/ebf9b313926e7ecf9adf33d4ac28d9a102849b": "ba9f0395b106be4ce735acc9908e8174",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/33/5b7f6c7e1a38986e36f89dbe513eaad56dc2f1": "708bf5fba17f7f3684ca0c9de781dd23",
".git/objects/36/48a46141edc05c56c8bcc3a019fa5f9b45c678": "6c26f0476251a63958dcb8c24834ccc8",
".git/objects/65/c51528054f1f9f292f788925ca82015c966b0d": "d0eeaecb883fb6d836b172d23e9f821f",
".git/objects/70/a772ad81e9125e3e4ceeb6c9e9ac4ff75471b2": "984b499184f2f2a5c1cbab9c66327d04",
".git/objects/70/bb82ce7ed75e9bdb2b023b71f3bf3c9578ad43": "946b0d1c559d3cbb95a5e5ece04658b8",
".git/objects/70/f1ef6bf42368e1b7a85ec851fc647eb52ee098": "01b096be8170422bcc4960e740863643",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/0f8ede37778416f93ffa6c2263132eaa2522f2": "b361353f05f05ba1929090e732eb3004",
".git/objects/87/325203c28cfd8dd6411abe942c2020b17a0f08": "2969084149b01b95167807720c1e6e22",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/dd25030e716c7601d15bee7c963017c2a95258": "ccf7e4182424665a4baf83f6fff2e1bf",
".git/objects/91/fb7be6caef69c147a0ce8d9f24f4dcef584dac": "1b9c62a5dbbee14847c664beaa62cd28",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/bffb44759222990877705c838094d51a147f52": "1821b2029ed2a0f0534929ea0672825f",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/a7f65653cf791da0e3795f04ca5f343ecc1e5b": "3f2c4863c88db1ef6fa224536d7e0768",
".git/objects/c3/9473b417fcd39b4885d3fa395a4fb74504ebf2": "49077d451bee01387e31095fe4ad7b5b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ec/44ed7aa5e615db927431da5a32ce1d2d39fbc3": "7253235f083a8e525ab6bc573b449316",
".git/objects/f0/83e72aaa7b92c58b1ca6a3c06f61ef8751981f": "01f15a1714574a87392f610486fa55cc",
".git/objects/f5/443dbc12e499bc92f8f6871918bab1aec0ef48": "094cb2465af39c0b5ee0c750f59403e5",
".git/refs/heads/main": "b96ad784e7562a5f0739301bddda3086",
".git/refs/remotes/origin/main": "b96ad784e7562a5f0739301bddda3086",
"assets/AssetManifest.json": "0571f9435275784e0e4a3c5decb61bbc",
"assets/assets/images/0.jpg": "8a561c0dcd6b20694d1c45d519f0d9ec",
"assets/assets/images/1.jpg": "1cfdbc8284eeb6a48f4483f6c4abbe85",
"assets/assets/images/2.jpg": "e59969753c0d20625ce29a19d547e4e4",
"assets/assets/images/3.jpg": "cabbda3a07c9fc83735e035948b7fa00",
"assets/assets/images/4.jpg": "5e9ebbdaac77283496001ceec0569146",
"assets/assets/images/5.jpg": "eafbab6306f0a56182a2648fcb6ad041",
"assets/FontManifest.json": "ed6680e8ff8453a636990e3ce8be5978",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/ZillaSlab-Regular.ttf": "15db01c5265adb04fd5e691e5ef26009",
"assets/NOTICES": "fcc162f81daeed6534fc4657fa417382",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "876ee95ccc139f883063c351fc816d41",
"/": "876ee95ccc139f883063c351fc816d41",
"main.dart.js": "88eff79aa3a5beab29a906f6f82e51a5",
"manifest.json": "faecf9f9cdfea383743c079b7c2f4569",
"version.json": "610eb370a36ba23f1ba46daa7f3da6f6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
