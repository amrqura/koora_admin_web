'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "2b8514f524373b135d687478cd14f17b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "9ad1f617149fe6a79b0530d055a928e6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1b5574ad73bc78a9cb1701d8e0febaef",
".git/logs/refs/heads/main": "32e63be46941b3d8cb43f3093e68afc0",
".git/logs/refs/remotes/origin/main": "fa71512b0fbfc3903f934a9d32fbe626",
".git/objects/00/8f1badb7d471263b9ab9b98db5e887bedf1446": "91f3751a3c14f7feaf5fc5cfde00a752",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/04/3be5b0213f2f285afa5fb715e3b4275ef819e1": "87957236c54c56ffee2b31e2f1329ed9",
".git/objects/07/328b9311d4bda904c56506b1aeaed8a5a35297": "bda1925a44fab2ac7d84172b2980d88a",
".git/objects/07/608ed02672a6ed92ba7b032ccf926a6dc150c2": "9d612b25703b25fbb9d1773f8fc081bf",
".git/objects/09/d5f8dae0d153265eeaef8e5add5c889eb2e668": "f79268f05387da3a3e4fb619925120df",
".git/objects/09/e0e7682933af89f55f2be2cc177c7e9be5728a": "c87c81e60d985f51efd252166edc126d",
".git/objects/0e/735215947dfb5108b855b719ab7b50b313d3f1": "8228e7adbbdbfe5c586dd4001bf4f1c7",
".git/objects/10/1fa338c26dd13449a7e31689d57d11757ad0c7": "523cb7c344f5cc0fd5ef550afea448c7",
".git/objects/11/5b241f6b3250e00bcce785ba2a3b40a9e69bfb": "08d05b314c452fcf6127ea7235d85ce3",
".git/objects/16/afb375de7e17a7e1262cb44c23ef80ab17cd4c": "23adc3253c7e4f23f8cb4a7cf877432d",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/18/56d9b7c41fb694c2490f47b64e66f0c34b4315": "b97a66545993bf2f15cf5f52cbe927a8",
".git/objects/18/94ef556d417f864bd71dd524c3126a011ba5ea": "5b80733774c2c1925f920b6a743facfa",
".git/objects/1d/3614e1a7e9a20532eefd6d98348d3878127591": "e2880108e4b36971102dd836176772a3",
".git/objects/22/c13b32ebb39e0b3da830eac1ad09017cba5654": "3e4d9e11620d49da7995eaec6cf774ac",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/33/555940f1fcbf1d8c87728844f8673fbe50d4dd": "4f18b6802ff74afedeb6cb551945ffff",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/09c1d54bb604ee4e8bc30f2a4dd427aca46dd1": "c44da28482ce80f0844e74cef4a88cf4",
".git/objects/3d/ada8c48fad869acf495301a9a75cff309c7b18": "f863689ddb93584ebcac3f76a0a1f25f",
".git/objects/3e/50261fd3e13f0f79217ac0cf3be074dbdb36b9": "08f74d689d515fb9972a26a61e6f027d",
".git/objects/41/cbc6bb126ab9c01f8a4661145798d3ef758639": "1cf45f979bd3a6b7d72430c0f366467e",
".git/objects/43/3bc965df4dfebfd70ffd41551786460fd158fa": "2767f4df5133b363d8de972ce5c02009",
".git/objects/44/bc9f60b4a103536c8b689abf8e5c99d3a66ba3": "904bed003a1a37469e9520eeda565ec2",
".git/objects/46/44d0a902d9b7a3b2014196ae8fb1af7a67a06f": "eb1b574a28023ea5e080ffd531fd6ca1",
".git/objects/47/d39d43b4c0281f64d2ad52bb8b06d6156c251f": "48e176c8e100b7ba9bd2b5d8b0e76ec3",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/50/f084c2a93b7eefdc80fbb9d76b566a552d6686": "4fe214f30f129efa229228f32673ad3f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/318d490ed6569ec4ac58a9685e37a866386a60": "bfd21b669a6e53ef60953f9595d2582a",
".git/objects/56/67952defae06c58e0bb7fba9b222c904e9c385": "b2d0ae7144c9af307b24bec18f107bec",
".git/objects/5b/30914ae2dfd736a4d4b8fcb9fd31d8fb30a6d8": "97487eb98b7c7afa7ac4a6546e459a4c",
".git/objects/5b/db2a93dd23014dd4271c613a429341df39d4af": "6a2fc24c94a95080cc9e1d05e5bbcb60",
".git/objects/5c/fd16bf57d948a6afb7faef76f27af2a666071b": "bf3a26358d957a322e85d7dc5290c0f4",
".git/objects/62/6c828118d8d87bb2c9fe899b570bec79ca4235": "9848f6af460b30d418ea13b9210f0044",
".git/objects/66/af6a5025fde8b6fbd91820cd5b317007f5aa46": "0ec8a0fd85ca6589d3febd325d6e176a",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6e/33ad05a0f475b92a704f23f8e3869ee4ecb76d": "4b012f7e4de1a2f5b77fb44e81cd18c5",
".git/objects/70/78c3493253f0fbfe44320c794b1ed7012d6a12": "0190b4e2e7b1eb8f8a4b09a5c3e3a463",
".git/objects/7e/24344fc08c005f8a254bb3e92ad3500bb423e1": "c8398ed2cad7cc73c1779f43e5ab36aa",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/85/b1397344a24bbedf1d340bfc5da3244f18b6b8": "cb4d703b196d10ff9a23c44f4d59bb83",
".git/objects/86/1c63ca9e2711ec74f0b354e73fa730a11d1835": "b65b9d1a887cd15ca2be5735b23ab42d",
".git/objects/86/61d2fd67b12483074fdad621c6fdd860fbac38": "7c99c7deae566677ed2d1272b38c49a9",
".git/objects/88/6ded6b7ccac38b381d3fd891f0bf503043094c": "829da9655a4fac96d540d2fbd469c7a4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f2d1d7e4223c772fd1d40823a8c8d2d8594a4b": "fc5f4b02431d6bb3dc85163829258255",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/90dbbf11d35bbd8ebdb5aacc822ac190f2ec16": "55bd56fe7ef506329b58ccbd8bf64f93",
".git/objects/91/b6d546397540eb56678904d6652c4de509f38a": "4095d6f0e109016233d3cfe0eee383ba",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9c/982a3266b61eb1b9db4c15387d49fd3a9dfa8b": "c80dc794a485b812601bdc1779e3e71b",
".git/objects/a1/43b5a1f9d6c61da27ccb200a1436682ca11639": "11c92d07a46e990b651124a9f284393d",
".git/objects/a2/e671551ea1a4b98f40f8cbe04cb6502c8783bf": "c6e95b05991af3f45d29bb02e036e34e",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a3/1b5c63cd47420dcac61c560e9095a5838fdc06": "c19393d89d215704221e945275189d4f",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/4919971954115d1c417e757726e71df46caf8d": "a5e776f3f712e9ad138fd6dea6457175",
".git/objects/b1/a38b7a0b9981746f86718ef8341b533d30a081": "af2d14187dfdd97acfe3aac361ecbe4b",
".git/objects/b2/e14559016ce57f26f36094c5fd5582407dfc9d": "ea7eb55ee76f1e9efb7e36640e97d66a",
".git/objects/b3/7ee0cd9d6c5506d84f7d52d0c86c1e18decb3a": "67160a2406415ff50d4ea2849b50a2c8",
".git/objects/b3/9c63c12f6e01ee84d95860ce60a867e90bf913": "bd539189c742560b33afde874bb67798",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/c53d700304cb4dba75f0f6306bafdd42813e87": "cd67b73b58f22e1706db398a4f19985c",
".git/objects/be/d1f50ac4dac0ea4e370e89f6f09414c2e2d608": "547c594fa135ea606c33f6cad9e7b84b",
".git/objects/bf/22f8b7b74e683e6144281de470920d48cedf8a": "20143b1de8af4098e769460b75b19f4d",
".git/objects/c1/8600c1f91f94305cc189fc0c58e56621882e86": "a93798282c5eae76e2fc4f2fe68162d9",
".git/objects/c5/c4d9fd1508833d68eeaf666081c1fdb0b2bdd6": "a80c755b7c0769d6ffe35c7b5b188597",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/c7/bf9e77d74cad4017ea89214f53bfb5a6933f0d": "1c01c039c2dd84b5de44802901e117ec",
".git/objects/c8/9d2b14bdd3141ea56085f88b2ed5b6534fb367": "db1f9e32cf3afa74d1b6c5a83b803fd5",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/b79c269fb752b8c29f52ec5652b7e001d21c9a": "4087d36f6f07028b19166eba6cede94a",
".git/objects/e3/76fa71e2796bf78fb94d4a7980a63a7645e021": "78793ef7623d85e31c8a0d321f3d5e1f",
".git/objects/e3/91ed13f11823e44bb8fc25828f9e4d32a96473": "7d8055881a4986f6a90abc50d0417d9a",
".git/objects/e5/8f4447185478a2a898d6931613d917bfd1b3d0": "d867cb291659d83fa5c0409fedefe00c",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/85e286357c26389e885b74de1c1168c6a75f92": "8d5fbb938bdb06954d92fa606ce7b35e",
".git/objects/e7/95df10ff586d7ae95e0ba4f56b86de7623325e": "20df6c0244117fdafa541b5c2b84d9cd",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e9/18c71dfe8ad458048b8ebb769a3c454250533d": "002a0a3c0c54f9d9b10e5473fece9223",
".git/objects/ea/5f824a26275ce7fae6b92f912e17e2b698acca": "48227020d1c63873707506ffb58e1682",
".git/objects/eb/1d80434148947ee78a5815c8ced0e8852cd533": "914bdfcccaf5bff359408bee8955a4cf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a7dba2c3278731afc0f30c90e6131ffcb2fc8e": "c78e963754ef5ade4bf3bc84c1b414c4",
".git/objects/ec/08196319575f320c3224bf025bb8fe657de7a4": "ba047ebf4016cc648a5df45ad97abfec",
".git/objects/ee/409d613765d31b70de073a5a421724e3981413": "e724b7ccc9322202efbfa982fef71c0d",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f5/ae4990b110273cbd4ddbcdf99bb308664378a8": "97fbf9ace3c87b0d1ba71c06a7fe4446",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "74210fd9c647a1ef6330f5319a98cd2f",
".git/refs/remotes/origin/main": "74210fd9c647a1ef6330f5319a98cd2f",
"assets/AssetManifest.bin": "033ed8c26ec01b7da022a012254d5e71",
"assets/AssetManifest.json": "f711df96ed5ed5f717c4bbf83a9068c3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "98720c46d8e276047968d30a4102c2bd",
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
"assets/icons/logo.png": "c02e0d505279f895c563259edeb19d2b",
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
"assets/lottie/loading.json": "a56a1aa66db8a8b57d90073bbd1c7a31",
"assets/NOTICES": "b88267e77f5d38994143ad5323923d8e",
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
"assets/packages/user_app/assets/icons/cup.png": "366f75e6eeed4eee2c2ef283f022bbd5",
"assets/packages/user_app/assets/icons/diamond.png": "d80230e574c405c5406e381d4493b994",
"assets/packages/user_app/assets/icons/document.png": "298d322e030b4a62b87c5b4e6964ed36",
"assets/packages/user_app/assets/icons/edit_image.png": "028b8b12f1279e10aaf2e14cebbbf08b",
"assets/packages/user_app/assets/icons/email-open.png": "b51f4730bec6ec96a58879b6eaaf52a8",
"assets/packages/user_app/assets/icons/email.png": "323ce32fa68a61a68bba27bba45d4fec",
"assets/packages/user_app/assets/icons/gallery-add.png": "134696d76ad8c6ea3f9984ab6d467341",
"assets/packages/user_app/assets/icons/home.png": "36557a2963dcc79e28ae86e0a118e26e",
"assets/packages/user_app/assets/icons/league.png": "80cc9144c8d8141f208c4fc0f55016d8",
"assets/packages/user_app/assets/icons/logo.png": "c02e0d505279f895c563259edeb19d2b",
"assets/packages/user_app/assets/icons/matches.png": "55a6bed40bf37c141095275a5522649f",
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
"assets/packages/user_app/assets/icons/teams.png": "d2359be5356ce12db6216934a2d52ba7",
"assets/packages/user_app/assets/icons/ticket.png": "5aaee30be7aead79bd2852417d1c33f2",
"assets/packages/user_app/assets/icons/toppers.png": "301b4ad2deed13e974e7e5b68b9ab33c",
"assets/packages/user_app/assets/images/arsenel.png": "1addede33a093e015d1c885c67c802a3",
"assets/packages/user_app/assets/images/liverpool.png": "528c1ef4333e48222bf6c8e2ca852490",
"assets/packages/user_app/assets/images/premium_banner.png": "24316b5dcbf5435c5dc9e70f0d58b7f7",
"assets/packages/user_app/assets/lottie/loading.json": "a56a1aa66db8a8b57d90073bbd1c7a31",
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
"assets/web/assets/icons/logo.png": "c02e0d505279f895c563259edeb19d2b",
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
"assets/web/assets/lottie/loading.json": "a56a1aa66db8a8b57d90073bbd1c7a31",
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
"index.html": "5c554d128d20006de8068ad990762412",
"/": "5c554d128d20006de8068ad990762412",
"main.dart.js": "b134aacf08d556f1a8f36c2e36760421",
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
