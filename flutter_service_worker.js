'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eb86c704570c23290001193d6bebf9ec",
"assets/AssetManifest.json": "764dcb77897b3e1143398c9fe8e6f240",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "00be008c031a944a4f526e2770e3ab21",
"assets/icons/arrow-left.png": "979eadc0a4824f44e3b39ce661ab265c",
"assets/icons/chat.png": "394213b6b402081bbac033322e8f11d1",
"assets/icons/congrates.png": "822a2e6ff45f31086c454f7664825900",
"assets/icons/document.png": "298d322e030b4a62b87c5b4e6964ed36",
"assets/icons/edit_image.png": "028b8b12f1279e10aaf2e14cebbbf08b",
"assets/icons/email-open.png": "b51f4730bec6ec96a58879b6eaaf52a8",
"assets/icons/email.png": "323ce32fa68a61a68bba27bba45d4fec",
"assets/icons/gallery-add.png": "134696d76ad8c6ea3f9984ab6d467341",
"assets/icons/home.png": "36557a2963dcc79e28ae86e0a118e26e",
"assets/icons/league.png": "80cc9144c8d8141f208c4fc0f55016d8",
"assets/icons/logo.png": "f6b5825f7d69c7ae1046530c706e9084",
"assets/icons/matches.png": "55a6bed40bf37c141095275a5522649f",
"assets/icons/mic.png": "146a89f6cb6a5e7fd111dba99c262432",
"assets/icons/microphone.png": "c5d1e5be6db454fd627e6e4008facf7b",
"assets/icons/notification.png": "c7820d957e4dc3fc67b4440d1ae5b5d8",
"assets/icons/profile/arrow-right.png": "a24a46ce0a0c3fe570b808ac466b8839",
"assets/icons/profile/cup.png": "a0defc9db21a3996e2c21450bf240d89",
"assets/icons/profile/help.png": "a245069f2ac3412e314a8ed4496bcaca",
"assets/icons/profile/mailbox.png": "914c30f7bb0891777f60bed6a6981770",
"assets/icons/profile/profile-profile.png": "19c26651b406efc0074ab59c1f8900b1",
"assets/icons/profile/ranking.png": "c8334945a259530a075e16732837fd2d",
"assets/icons/profile/shield.png": "5cbb43c10fae6c071fddf37dc5adb1e3",
"assets/icons/profile/unlock.png": "6e0d2eaf2aaf9b454cec39b2f81f064b",
"assets/icons/profile-narrow.png": "dd35de0ec8ff0f152763c0e3bcd0eafb",
"assets/icons/profile-wide.png": "a4a4766e4d25474f82db8bfbc2172fcc",
"assets/icons/search.png": "afe0e64a198fb6fc8cada82f932950b9",
"assets/icons/send.png": "cf366954aeaf05fad2ef432b4ec0e5b5",
"assets/icons/support.png": "c4fc10fe643285385552d16e1b93c9e3",
"assets/icons/teams.png": "d2359be5356ce12db6216934a2d52ba7",
"assets/icons/ticket.png": "5aaee30be7aead79bd2852417d1c33f2",
"assets/NOTICES": "dec8f882f27e35c4ad7cc6de4aa20397",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/shared_code/assets/icons/push.txt": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/shared_code/assets/svg/eye-closed.svg": "0f987a448e82446540e8ef4718afd212",
"assets/packages/shared_code/assets/svg/eye-open.svg": "787047e970a747fd305a836cdeb01f58",
"assets/packages/user_app/assets/fonts/cairo.ttf": "d5664f46ff376cb597c2e18ec22f9b38",
"assets/packages/user_app/assets/icons/arrow-left.png": "979eadc0a4824f44e3b39ce661ab265c",
"assets/packages/user_app/assets/icons/chat.png": "394213b6b402081bbac033322e8f11d1",
"assets/packages/user_app/assets/icons/congrates.png": "822a2e6ff45f31086c454f7664825900",
"assets/packages/user_app/assets/icons/document.png": "298d322e030b4a62b87c5b4e6964ed36",
"assets/packages/user_app/assets/icons/edit_image.png": "028b8b12f1279e10aaf2e14cebbbf08b",
"assets/packages/user_app/assets/icons/email-open.png": "b51f4730bec6ec96a58879b6eaaf52a8",
"assets/packages/user_app/assets/icons/email.png": "323ce32fa68a61a68bba27bba45d4fec",
"assets/packages/user_app/assets/icons/gallery-add.png": "134696d76ad8c6ea3f9984ab6d467341",
"assets/packages/user_app/assets/icons/home.png": "36557a2963dcc79e28ae86e0a118e26e",
"assets/packages/user_app/assets/icons/logo.png": "f6b5825f7d69c7ae1046530c706e9084",
"assets/packages/user_app/assets/icons/mic.png": "146a89f6cb6a5e7fd111dba99c262432",
"assets/packages/user_app/assets/icons/microphone.png": "c5d1e5be6db454fd627e6e4008facf7b",
"assets/packages/user_app/assets/icons/notification.png": "d1ea137cdff3c082c9156f2b81adbcd9",
"assets/packages/user_app/assets/icons/profile/arrow-right.png": "a24a46ce0a0c3fe570b808ac466b8839",
"assets/packages/user_app/assets/icons/profile/cup.png": "a0defc9db21a3996e2c21450bf240d89",
"assets/packages/user_app/assets/icons/profile/help.png": "a245069f2ac3412e314a8ed4496bcaca",
"assets/packages/user_app/assets/icons/profile/mailbox.png": "914c30f7bb0891777f60bed6a6981770",
"assets/packages/user_app/assets/icons/profile/profile-profile.png": "19c26651b406efc0074ab59c1f8900b1",
"assets/packages/user_app/assets/icons/profile/ranking.png": "c8334945a259530a075e16732837fd2d",
"assets/packages/user_app/assets/icons/profile/shield.png": "5cbb43c10fae6c071fddf37dc5adb1e3",
"assets/packages/user_app/assets/icons/profile/unlock.png": "6e0d2eaf2aaf9b454cec39b2f81f064b",
"assets/packages/user_app/assets/icons/profile-narrow.png": "dd35de0ec8ff0f152763c0e3bcd0eafb",
"assets/packages/user_app/assets/icons/profile-wide.png": "a4a4766e4d25474f82db8bfbc2172fcc",
"assets/packages/user_app/assets/icons/search.png": "afe0e64a198fb6fc8cada82f932950b9",
"assets/packages/user_app/assets/icons/send.png": "cf366954aeaf05fad2ef432b4ec0e5b5",
"assets/packages/user_app/assets/icons/ticket.png": "5aaee30be7aead79bd2852417d1c33f2",
"assets/packages/user_app/assets/images/arsenel.png": "1addede33a093e015d1c885c67c802a3",
"assets/packages/user_app/assets/images/liverpool.png": "528c1ef4333e48222bf6c8e2ca852490",
"assets/packages/user_app/assets/images/premium_banner.png": "24316b5dcbf5435c5dc9e70f0d58b7f7",
"assets/packages/user_app/assets/svgs/email.svg": "6d3bceebb88e82e4476126fc9c95abab",
"assets/packages/user_app/assets/svgs/eye-closed.svg": "04aeebc66f85e729b233953362515949",
"assets/packages/user_app/assets/svgs/eye-open.svg": "1fb248fb908a50b57f0a8c889c6979e1",
"assets/packages/user_app/assets/svgs/profile.svg": "aa52b8656398f5305d76c64c64a88c85",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/svgs/email.svg": "6d3bceebb88e82e4476126fc9c95abab",
"assets/svgs/eye-closed.svg": "04aeebc66f85e729b233953362515949",
"assets/svgs/eye-open.svg": "1fb248fb908a50b57f0a8c889c6979e1",
"assets/svgs/profile.svg": "aa52b8656398f5305d76c64c64a88c85",
"assets/web/assets/icons/arrow-left.png": "979eadc0a4824f44e3b39ce661ab265c",
"assets/web/assets/icons/chat.png": "394213b6b402081bbac033322e8f11d1",
"assets/web/assets/icons/congrates.png": "822a2e6ff45f31086c454f7664825900",
"assets/web/assets/icons/document.png": "298d322e030b4a62b87c5b4e6964ed36",
"assets/web/assets/icons/edit_image.png": "028b8b12f1279e10aaf2e14cebbbf08b",
"assets/web/assets/icons/email-open.png": "b51f4730bec6ec96a58879b6eaaf52a8",
"assets/web/assets/icons/email.png": "323ce32fa68a61a68bba27bba45d4fec",
"assets/web/assets/icons/gallery-add.png": "134696d76ad8c6ea3f9984ab6d467341",
"assets/web/assets/icons/home.png": "36557a2963dcc79e28ae86e0a118e26e",
"assets/web/assets/icons/league.png": "80cc9144c8d8141f208c4fc0f55016d8",
"assets/web/assets/icons/logo.png": "f6b5825f7d69c7ae1046530c706e9084",
"assets/web/assets/icons/matches.png": "55a6bed40bf37c141095275a5522649f",
"assets/web/assets/icons/mic.png": "146a89f6cb6a5e7fd111dba99c262432",
"assets/web/assets/icons/microphone.png": "c5d1e5be6db454fd627e6e4008facf7b",
"assets/web/assets/icons/notification.png": "c7820d957e4dc3fc67b4440d1ae5b5d8",
"assets/web/assets/icons/profile/arrow-right.png": "a24a46ce0a0c3fe570b808ac466b8839",
"assets/web/assets/icons/profile/cup.png": "a0defc9db21a3996e2c21450bf240d89",
"assets/web/assets/icons/profile/help.png": "a245069f2ac3412e314a8ed4496bcaca",
"assets/web/assets/icons/profile/mailbox.png": "914c30f7bb0891777f60bed6a6981770",
"assets/web/assets/icons/profile/profile-profile.png": "19c26651b406efc0074ab59c1f8900b1",
"assets/web/assets/icons/profile/ranking.png": "c8334945a259530a075e16732837fd2d",
"assets/web/assets/icons/profile/shield.png": "5cbb43c10fae6c071fddf37dc5adb1e3",
"assets/web/assets/icons/profile/unlock.png": "6e0d2eaf2aaf9b454cec39b2f81f064b",
"assets/web/assets/icons/profile-narrow.png": "dd35de0ec8ff0f152763c0e3bcd0eafb",
"assets/web/assets/icons/profile-wide.png": "a4a4766e4d25474f82db8bfbc2172fcc",
"assets/web/assets/icons/search.png": "afe0e64a198fb6fc8cada82f932950b9",
"assets/web/assets/icons/send.png": "cf366954aeaf05fad2ef432b4ec0e5b5",
"assets/web/assets/icons/support.png": "c4fc10fe643285385552d16e1b93c9e3",
"assets/web/assets/icons/teams.png": "d2359be5356ce12db6216934a2d52ba7",
"assets/web/assets/icons/ticket.png": "5aaee30be7aead79bd2852417d1c33f2",
"assets/web/assets/svgs/email.svg": "6d3bceebb88e82e4476126fc9c95abab",
"assets/web/assets/svgs/eye-closed.svg": "04aeebc66f85e729b233953362515949",
"assets/web/assets/svgs/eye-open.svg": "1fb248fb908a50b57f0a8c889c6979e1",
"assets/web/assets/svgs/profile.svg": "aa52b8656398f5305d76c64c64a88c85",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "48d1bdde6b80b124f8d57da670a04afe",
"/": "48d1bdde6b80b124f8d57da670a04afe",
"main.dart.js": "8377628eaca511bfd0fdf99c5475a4af",
"manifest.json": "34f4bd367f5bf7a13207a7014b03c385",
"version.json": "12481ed665e76f12267e9aff8cb08c2c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
