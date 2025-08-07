<template>
  <div class="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-red-950">
    <div class="py-16 px-4 mx-auto max-w-7xl">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-red-800 dark:from-red-400 dark:via-orange-400 dark:to-red-600 bg-clip-text text-transparent">
            Säkerhetsresurser
          </h1>
          <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Gratis verktyg för att kontrollera säkerhet - utan att betala bluffföretag
          </p>
          
          <!-- Anti-scam banner -->
          <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8">
            <div class="flex items-start space-x-3">
              <Icon name="heroicons:exclamation-triangle" class="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <div class="text-left">
                <h3 class="font-semibold text-red-800 dark:text-red-200 mb-2">Varning för betalbluffar!</h3>
                <p class="text-sm text-red-700 dark:text-red-300">
                  Företag som tar betalt för att "kolla om du är hackad" eller "skydda din identitet" säljer dig tjänster som är gratis. 
                  Alla verktyg nedan kostar ingenting och är ofta bättre än betaltjänsterna.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Password Breach Detection -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-8 flex items-center">
            <Icon name="heroicons:key" class="h-8 w-8 mr-4 text-red-600 dark:text-red-400" />
            Kolla om dina lösenord läckt
          </h2>
          
          <div class="grid gap-6 md:grid-cols-2">
            <!-- Have I Been Pwned -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-red-500/10 to-orange-600/20 border border-red-200/30 dark:border-red-700/30 mb-6">
                <Icon name="heroicons:shield-exclamation" class="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">Have I Been Pwned</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Troy Hunt's världsberömda tjänst. Kolla om din e-post finns i dataläckor från stora hack.
              </p>
              <div class="space-y-3">
                <Button
                  tag="a"
                  href="https://haveibeenpwned.com/"
                  external
                  target="_blank"
                  variant="primary"
                  icon="heroicons:arrow-top-right-on-square"
                >
                  Kolla din e-post
                </Button>
                <Button
                  tag="a"
                  href="https://haveibeenpwned.com/Passwords"
                  external
                  target="_blank"
                  variant="secondary"
                  icon="heroicons:key"
                >
                  Kolla lösenord
                </Button>
              </div>
            </Card>

            <!-- Firefox Monitor -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-red-600/20 border border-orange-200/30 dark:border-orange-700/30 mb-6">
                <Icon name="heroicons:fire" class="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">Firefox Monitor</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Mozillas gratis tjänst som använder samma databas som Have I Been Pwned.
              </p>
              <Button
                tag="a"
                href="https://monitor.firefox.com/"
                external
                target="_blank"
                variant="primary"
                icon="heroicons:arrow-top-right-on-square"
              >
                Firefox Monitor
              </Button>
            </Card>
          </div>
        </div>

        <!-- Email Security -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-8 flex items-center">
            <Icon name="heroicons:envelope" class="h-8 w-8 mr-4 text-blue-600 dark:text-blue-400" />
            E-postsäkerhet
          </h2>
          
          <div class="grid gap-6 md:grid-cols-2">
            <!-- ProtonMail -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-600/20 border border-blue-200/30 dark:border-blue-700/30 mb-6">
                <Icon name="heroicons:lock-closed" class="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">ProtonMail</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Krypterad e-post från Schweiz. Gratis upp till 1GB. Bättre än Gmail för integritet.
              </p>
              <Button
                tag="a"
                href="https://proton.me/mail"
                external
                target="_blank"
                variant="primary"
                icon="heroicons:arrow-top-right-on-square"
              >
                ProtonMail
              </Button>
            </Card>

            <!-- Tutanota -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500/10 to-blue-600/20 border border-green-200/30 dark:border-green-700/30 mb-6">
                <Icon name="heroicons:shield-check" class="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">Tuta (f.d. Tutanota)</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Tysk krypterad e-post. Även de har gratis konton med end-to-end kryptering.
              </p>
              <Button
                tag="a"
                href="https://tuta.com/"
                external
                target="_blank"
                variant="primary"
                icon="heroicons:arrow-top-right-on-square"
              >
                Tuta
              </Button>
            </Card>
          </div>
        </div>

        <!-- Password Managers -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-8 flex items-center">
            <Icon name="heroicons:lock-closed" class="h-8 w-8 mr-4 text-green-600 dark:text-green-400" />
            Lösenordshanterare
          </h2>
          
          <div class="grid gap-6 md:grid-cols-3">
            <!-- Bitwarden -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-green-600/20 border border-blue-200/30 dark:border-blue-700/30 mb-6">
                <Icon name="heroicons:key" class="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">Bitwarden</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                Gratis, open source, funkar överallt. Genererar säkra lösenord.
              </p>
              <Button
                tag="a"
                href="https://bitwarden.com/"
                external
                target="_blank"
                variant="primary"
                size="sm"
                icon="heroicons:arrow-top-right-on-square"
              >
                Bitwarden
              </Button>
            </Card>

            <!-- KeePassXC -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500/10 to-blue-600/20 border border-green-200/30 dark:border-green-700/30 mb-6">
                <Icon name="heroicons:computer-desktop" class="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">KeePassXC</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                Modern KeePass-variant. Lokal databas, inget moln, maximal kontroll. Open source.
              </p>
              <div class="space-y-1">
                <Button
                  tag="a"
                  href="https://keepassxc.org/"
                  external
                  target="_blank"
                  variant="primary"
                  size="sm"
                  icon="heroicons:arrow-top-right-on-square"
                  class="w-full justify-center"
                >
                  KeePassXC
                </Button>
                <Button
                  tag="a"
                  href="https://github.com/keepassxreboot/keepassxc"
                  external
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  icon="heroicons:code-bracket"
                  class="w-full justify-center text-xs"
                >
                  Källkod
                </Button>
              </div>
            </Card>

            <!-- Browser Built-in -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-blue-600/20 border border-purple-200/30 dark:border-purple-700/30 mb-6">
                <Icon name="heroicons:globe-alt" class="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">Webbläsaren</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                Chrome/Firefox har inbyggda lösenordshanterare. Bättre än inget!
              </p>
              <Button
                variant="ghost"
                size="sm"
                disabled
              >
                Redan installerat
              </Button>
            </Card>
          </div>
        </div>

        <!-- Two-Factor Authentication -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-8 flex items-center">
            <Icon name="heroicons:device-phone-mobile" class="h-8 w-8 mr-4 text-purple-600 dark:text-purple-400" />
            Tvåfaktorsautentisering (2FA)
          </h2>
          
          <div class="grid gap-6 md:grid-cols-2">
            <!-- Bitwarden Authenticator -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-indigo-600/20 border border-blue-200/30 dark:border-blue-700/30 mb-6">
                <Icon name="heroicons:lock-closed" class="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">Bitwarden Authenticator</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Gratis, open source 2FA från integritetsvänliga Bitwarden. Molnbackup utan spårning.
              </p>
              <div class="space-y-2">
                <Button
                  tag="a"
                  href="https://bitwarden.com/products/authenticator/"
                  external
                  target="_blank"
                  variant="primary"
                  icon="heroicons:arrow-top-right-on-square"
                  class="w-full justify-center"
                >
                  Bitwarden Authenticator
                </Button>
                <Button
                  tag="a"
                  href="https://github.com/bitwarden/clients"
                  external
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  icon="heroicons:code-bracket"
                  class="w-full justify-center"
                >
                  Källkod (GitHub)
                </Button>
              </div>
            </Card>

            <!-- Aegis Authenticator -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500/10 to-blue-600/20 border border-green-200/30 dark:border-green-700/30 mb-6">
                <Icon name="heroicons:shield-check" class="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">Aegis Authenticator</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Open source 2FA-app utan spårning. Lokal kryptering, backup-möjligheter, bättre än Google.
              </p>
              <div class="space-y-2">
                <Button
                  tag="a"
                  href="https://getaegis.app/"
                  external
                  target="_blank"
                  variant="primary"
                  icon="heroicons:arrow-top-right-on-square"
                  class="w-full justify-center"
                >
                  Ladda ner Aegis
                </Button>
                <Button
                  tag="a"
                  href="https://github.com/beemdevelopment/Aegis"
                  external
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  icon="heroicons:code-bracket"
                  class="w-full justify-center"
                >
                  Källkod (GitHub)
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <!-- VPN Services -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-8 flex items-center">
            <Icon name="heroicons:globe-alt" class="h-8 w-8 mr-4 text-indigo-600 dark:text-indigo-400" />
            VPN-tjänster
          </h2>
          
          <!-- VPN Reality Check Banner -->
          <div class="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-8 mb-8">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-2xl flex items-center justify-center">
                <Icon name="heroicons:light-bulb" class="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
                  VPN-sanningen (ingen betald annonsering här)
                </h3>
                <div class="space-y-4 text-yellow-700 dark:text-yellow-300">
                  <p class="text-lg leading-relaxed">
                    <strong>VPN är inte magisk anonymitet!</strong> Det är som ett Mario-rör, du dyker upp på en annan sida av världen, men om du loggar in på Facebook, Gmail, eller Instagram via VPN:et så har du korrelerat all data ändå. Plattformarna vet exakt vem du är.
                  </p>
                  
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-green-100 dark:bg-green-900/40 rounded-xl p-4">
                      <p class="font-semibold mb-3 text-green-800 dark:text-green-200">✅ VPN är bra för:</p>
                      <ul class="space-y-2 text-sm text-green-700 dark:text-green-300">
                        <li>• Osäkra WiFi-nätverk (hotell, café)</li>
                        <li>• Komma åt geo-blockerat innehåll</li>
                        <li>• Dölja trafik från internetleverantören</li>
                        <li>• Kringgå censur i vissa länder</li>
                      </ul>
                    </div>
                    
                    <div class="bg-red-100 dark:bg-red-900/40 rounded-xl p-4">
                      <p class="font-semibold mb-3 text-red-800 dark:text-red-200">❌ VPN hjälper INTE med:</p>
                      <ul class="space-y-2 text-sm text-red-700 dark:text-red-300">
                        <li>• Anonymitet om du loggar in på konton</li>
                        <li>• Att dölja dig från Facebook/Google</li>
                        <li>• Att bli "osynlig" på internet</li>
                        <li>• Skydd från malware eller virus</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p class="text-base font-medium bg-yellow-100 dark:bg-yellow-900/40 rounded-lg p-3">
                    💡 <strong>Viktigt:</strong> Detta är ingen betald annonsering. Jag rekommenderar gratis eller billiga alternativ för att du inte ska bli lurad av dyra "säkerhets-VPN:er" som kostar 100+ kr/månad.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid gap-6 md:grid-cols-3">
            <!-- Mullvad VPN -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-indigo-600/20 border border-blue-200/30 dark:border-blue-700/30 mb-6">
                <Icon name="heroicons:shield-check" class="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">Mullvad VPN</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                Svensk VPN med stark integritetspolicy. Betala anonymt, ingen loggning. 5€/månad.
              </p>
              <Button
                tag="a"
                href="https://mullvad.net/"
                external
                target="_blank"
                variant="primary"
                size="sm"
                icon="heroicons:arrow-top-right-on-square"
              >
                Mullvad VPN
              </Button>
            </Card>

            <!-- IVPN -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500/10 to-blue-600/20 border border-green-200/30 dark:border-green-700/30 mb-6">
                <Icon name="heroicons:eye-slash" class="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">IVPN</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                Gibraltar-baserad VPN. Accepterar Bitcoin, kräver ingen personlig info. Auditerad kod.
              </p>
              <Button
                tag="a"
                href="https://www.ivpn.net/"
                external
                target="_blank"
                variant="primary"
                size="sm"
                icon="heroicons:arrow-top-right-on-square"
              >
                IVPN
              </Button>
            </Card>

            <!-- ProtonVPN (Free) -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-600/20 border border-indigo-200/30 dark:border-indigo-700/30 mb-6">
                <Icon name="heroicons:currency-dollar" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">ProtonVPN (Gratis)</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                Schweizisk VPN med äkta gratis plan. Ingen loggning, från samma företag som ProtonMail.
              </p>
              <Button
                tag="a"
                href="https://protonvpn.com/"
                external
                target="_blank"
                variant="primary"
                size="sm"
                icon="heroicons:arrow-top-right-on-square"
              >
                ProtonVPN
              </Button>
            </Card>
          </div>
        </div>

        <!-- Privacy Browsers -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-8 flex items-center">
            <Icon name="heroicons:globe-alt" class="h-8 w-8 mr-4 text-purple-600 dark:text-purple-400" />
            Integritetsvänliga webbläsare
          </h2>
          
          <div class="grid gap-6 md:grid-cols-3">
            <!-- Firefox -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-red-600/20 border border-orange-200/30 dark:border-orange-700/30 mb-6">
                <Icon name="heroicons:fire" class="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">Firefox</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                Open source webbläsare från Mozilla. Konfigurera för maximal integritet.
              </p>
              <Button
                tag="a"
                href="https://www.firefox.com/"
                external
                target="_blank"
                variant="primary"
                size="sm"
                icon="heroicons:arrow-top-right-on-square"
              >
                Firefox
              </Button>
            </Card>

            <!-- LibreWolf -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-600/20 border border-blue-200/30 dark:border-blue-700/30 mb-6">
                <Icon name="heroicons:shield-check" class="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">LibreWolf</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                Firefox-fork med integritet som standard. Inget spårning, inga telemetri.
              </p>
              <div class="space-y-1">
                <Button
                  tag="a"
                  href="https://librewolf.net/"
                  external
                  target="_blank"
                  variant="primary"
                  size="sm"
                  icon="heroicons:arrow-top-right-on-square"
                  class="w-full justify-center"
                >
                  LibreWolf
                </Button>
                <Button
                  tag="a"
                  href="https://gitlab.com/librewolf-community/browser"
                  external
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  icon="heroicons:code-bracket"
                  class="w-full justify-center text-xs"
                >
                  Källkod
                </Button>
              </div>
            </Card>

            <!-- Brave -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-yellow-600/20 border border-orange-200/30 dark:border-orange-700/30 mb-6">
                <Icon name="heroicons:shield-exclamation" class="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">Brave</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                Chromium-baserad med integrerat annonsblockerare. Blockerar spårning som standard.
              </p>
              <Button
                tag="a"
                href="https://brave.com/"
                external
                target="_blank"
                variant="primary"
                size="sm"
                icon="heroicons:arrow-top-right-on-square"
              >
                Brave
              </Button>
            </Card>
          </div>
        </div>

        <!-- Search Engines -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-8 flex items-center">
            <Icon name="heroicons:magnifying-glass" class="h-8 w-8 mr-4 text-green-600 dark:text-green-400" />
            Privata sökmotorer
          </h2>
          
          <div class="grid gap-6 md:grid-cols-3">
            <!-- DuckDuckGo -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-red-600/20 border border-orange-200/30 dark:border-orange-700/30 mb-6">
                <Icon name="heroicons:magnifying-glass" class="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">DuckDuckGo</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                Ingen spårning, ingen profilbyggning. Bra resultat utan övervakningskapitalism.
              </p>
              <Button
                tag="a"
                href="https://duckduckgo.com/"
                external
                target="_blank"
                variant="primary"
                size="sm"
                icon="heroicons:arrow-top-right-on-square"
              >
                DuckDuckGo
              </Button>
            </Card>

            <!-- Startpage -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-green-600/20 border border-blue-200/30 dark:border-blue-700/30 mb-6">
                <Icon name="heroicons:eye-slash" class="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">Startpage</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                Googles resultat utan spårning. Holländsk integritetsfokus.
              </p>
              <Button
                tag="a"
                href="https://www.startpage.com/"
                external
                target="_blank"
                variant="primary"
                size="sm"
                icon="heroicons:arrow-top-right-on-square"
              >
                Startpage
              </Button>
            </Card>

            <!-- Searx -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500/10 to-blue-600/20 border border-green-200/30 dark:border-green-700/30 mb-6">
                <Icon name="heroicons:server" class="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">SearxNG</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                Open source, decentraliserad meta-sökmotor. Kör din egen instans.
              </p>
              <div class="space-y-1">
                <Button
                  tag="a"
                  href="https://searx.space/"
                  external
                  target="_blank"
                  variant="primary"
                  size="sm"
                  icon="heroicons:arrow-top-right-on-square"
                  class="w-full justify-center"
                >
                  Hitta instans
                </Button>
                <Button
                  tag="a"
                  href="https://github.com/searxng/searxng"
                  external
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  icon="heroicons:code-bracket"
                  class="w-full justify-center text-xs"
                >
                  Källkod
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <!-- DNS Services -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-8 flex items-center">
            <Icon name="heroicons:server" class="h-8 w-8 mr-4 text-indigo-600 dark:text-indigo-400" />
            Privata DNS-servrar
          </h2>
          
          <div class="grid gap-6 md:grid-cols-3">
            <!-- Quad9 -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-indigo-600/20 border border-blue-200/30 dark:border-blue-700/30 mb-6">
                <Icon name="heroicons:shield-check" class="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">Quad9</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                Schweizisk nonprofit. Blockerar skadliga sajter, ingen loggning. 9.9.9.9
              </p>
              <Button
                tag="a"
                href="https://quad9.net/"
                external
                target="_blank"
                variant="primary"
                size="sm"
                icon="heroicons:arrow-top-right-on-square"
              >
                Quad9
              </Button>
            </Card>

            <!-- NextDNS -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-blue-600/20 border border-purple-200/30 dark:border-purple-700/30 mb-6">
                <Icon name="heroicons:cog-6-tooth" class="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">NextDNS</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                Konfigurerbar DNS med annonsblockerare. Gratis upp till 300k frågor/månad.
              </p>
              <Button
                tag="a"
                href="https://nextdns.io/"
                external
                target="_blank"
                variant="primary"
                size="sm"
                icon="heroicons:arrow-top-right-on-square"
              >
                NextDNS
              </Button>
            </Card>

            <!-- Cloudflare DNS Warning -->
            <Card variant="glass" padding="lg" class="bg-yellow-50/50 dark:bg-yellow-900/20 border-yellow-200/50 dark:border-yellow-800/50">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-yellow-500/10 to-orange-600/20 border border-yellow-200/30 dark:border-yellow-700/30 mb-6">
                <Icon name="heroicons:exclamation-triangle" class="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Undvik Cloudflare</h3>
              <p class="text-yellow-700 dark:text-yellow-300 mb-4 leading-relaxed text-sm">
                1.1.1.1 är snabb men Cloudflare ser all din DNS-trafik. Använd Quad9 istället.
              </p>
            </Card>
          </div>
        </div>

        <!-- Swedish Security Resources -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-8 flex items-center">
            <Icon name="heroicons:flag" class="h-8 w-8 mr-4 text-blue-600 dark:text-blue-400" />
            Svenska säkerhetsresurser
          </h2>
          
          <div class="grid gap-6 md:grid-cols-2">
            <!-- IMY -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-yellow-600/20 border border-blue-200/30 dark:border-blue-700/30 mb-6">
                <Icon name="heroicons:building-office" class="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">Integritetsskyddsmyndigheten (IMY)</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Sveriges officiella dataskyddsmyndighet. Anmäl företag som vägrar radera dina uppgifter.
              </p>
              <div class="space-y-2">
                <Button
                  tag="a"
                  href="https://imy.se/"
                  external
                  target="_blank"
                  variant="primary"
                  icon="heroicons:arrow-top-right-on-square"
                  class="w-full justify-center"
                >
                  Besök IMY.se
                </Button>
                <Button
                  tag="a"
                  href="https://imy.se/privatperson/lamna-klagomal/"
                  external
                  target="_blank"
                  variant="secondary"
                  icon="heroicons:document-text"
                  class="w-full justify-center"
                >
                  Lämna klagomål
                </Button>
              </div>
            </Card>

            <!-- CERT-SE -->
            <Card variant="glass" hoverable padding="lg">
              <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-red-500/10 to-orange-600/20 border border-red-200/30 dark:border-red-700/30 mb-6">
                <Icon name="heroicons:shield-exclamation" class="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 class="text-lg font-semibold mb-4">CERT-SE</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Sveriges datasäkerhetscentrum. Information om aktuella hot och säkerhetsråd.
              </p>
              <Button
                tag="a"
                href="https://cert.se/"
                external
                target="_blank"
                variant="primary"
                icon="heroicons:arrow-top-right-on-square"
                class="w-full justify-center"
              >
                Besök CERT.se
              </Button>
            </Card>
          </div>
        </div>

        


        <!-- Anti-Scam Final Message -->
        <div class="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 mb-8">
          <div class="text-center">
            <div class="text-6xl mb-4">🖕</div>
            <h3 class="text-2xl font-bold text-red-800 dark:text-red-200 mb-4">
              Till alla bluffföretag
            </h3>
            <p class="text-red-700 dark:text-red-300 leading-relaxed mb-4">
              Alla tjänster på denna sida är <strong>gratis</strong>. Om någon försöker sälja dig "identitetsskydd", 
              "hackkontroller", "VPN-säkerhet" eller "lösenordsskydd" för pengar - säg nej. De lurar dig genom att sälja 
              det som redan finns gratis och ofta bättre online.
            </p>
            <div class="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 text-left">
              <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">Vanliga blufftjänster att undvika:</h4>
              <ul class="text-sm text-red-700 dark:text-red-300 space-y-1">
                <li>• "Identitetsskydd" för 99-299 kr/månad</li>
                <li>• "Kreditbevakning" som kostar pengar (gratis på UC.se)</li>
                <li>• "Dark web monitoring" (Have I Been Pwned gör detta gratis)</li>
                <li>• "VPN-säkerhet" för 100+ kr/månad (ProtonVPN och WARP är gratis)</li>
                <li>• "Personuppgiftsrensning" för hundratals kronor (du kan göra det själv gratis)</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="text-center">
          <Button
            tag="a"
            href="/"
            variant="secondary"
            icon="heroicons:arrow-left"
          >
            Tillbaka till startsidan
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO and Meta
useHead({
  title: 'Säkerhetsresurser - Gratis verktyg mot bluffföretag | Ge Fan i Mig',
  meta: [
    { name: 'description', content: 'Gratis säkerhetsverktyg för att kolla dataläckor, lösenord och e-postsäkerhet. Betala inte bluffföretag för det som redan är gratis. Have I Been Pwned, Bitwarden, ProtonMail.' },
    { name: 'keywords', content: 'dataläckor, lösenordssäkerhet, Have I Been Pwned, Bitwarden, ProtonMail, gratis säkerhet, bluffföretag, identitetsskydd, dark web monitoring' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { name: 'language', content: 'sv' },
    { name: 'geo.region', content: 'SE' },
    { property: 'og:title', content: 'Säkerhetsresurser - Gratis verktyg mot bluffföretag' },
    { property: 'og:description', content: 'Alla säkerhetsverktyg du behöver, helt gratis. Säg nej till företag som säljer det som redan finns gratis.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://gefanimig.se/security' },
    { property: 'og:site_name', content: 'Ge Fan i Mig' },
    { property: 'og:locale', content: 'sv_SE' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Säkerhetsresurser - Gratis verktyg mot bluffföretag' },
    { name: 'twitter:description', content: 'Alla säkerhetsverktyg du behöver, helt gratis. Säg nej till företag som säljer det som redan finns gratis.' },
    { name: 'canonical', content: 'https://gefanimig.se/security' },
  ],
  link: [
    { rel: 'canonical', href: 'https://gefanimig.se/security' },
    { rel: 'alternate', hreflang: 'sv', href: 'https://gefanimig.se/security' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Säkerhetsresurser',
        description: 'Gratis säkerhetsverktyg för att kolla dataläckor och lösenordssäkerhet',
        url: 'https://gefanimig.se/security',
        inLanguage: 'sv',
        about: {
          '@type': 'Thing',
          name: 'Cybersäkerhet',
          description: 'Gratis verktyg för att skydda din digitala säkerhet'
        },
        mainEntity: {
          '@type': 'ItemList',
          name: 'Gratis säkerhetsverktyg',
          description: 'Lista över gratis säkerhetsverktyg som ersätter betaltjänster',
          itemListElement: [
            {
              '@type': 'ListItem',
              name: 'Have I Been Pwned',
              description: 'Kolla om din e-post finns i dataläckor'
            },
            {
              '@type': 'ListItem',
              name: 'Bitwarden',
              description: 'Gratis lösenordshanterare'
            },
            {
              '@type': 'ListItem',
              name: 'ProtonMail',
              description: 'Säker e-posttjänst'
            }
          ]
        }
      })
    }
  ]
})

// Page transition
definePageMeta({
  transition: {
    name: 'slide-right',
    mode: 'out-in'
  }
})
</script>