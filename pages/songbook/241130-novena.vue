<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ChevronLeft, ChevronRight, Share2 } from 'lucide-vue-next'
import { useHead } from '#imports'

const songs = [
  {
    title: 'Al Señor por su bondad',
    tone: 'DO',
    lyrics: `Al Señor por su bondad lleguen siempre nuestros ruegos;
sembrador de la verdad, El cosecha para el Reino.

/Santo, santo es el Señor. Cantemos todos en su honor./

A los hombres tanto amó, que al rescate puso precio:
entregando a un gran dolor a su Hijo muy amado.

Él nos da fuerza y valor, nos cuida como Padre,
demos gloria a tanto amor, bendiciendo sus bondades.`
  },
  {
    title: 'Te ofrecemos, oh Señor',
    tone: 'FA',
    lyrics: `Te ofrecemos, oh Señor,
este pan y este vino.
Recíbelos, es nuestro don,
recíbelos de nuestras manos, Señor.

Es trigo de nuestros campos,
racimo de nuestras viñas.
Este pan será tu Cuerpo,
y este vino, tu Sangre.

Te ofrecemos, oh, Señor,
el trabajo de este día,
nuestra inquietud, nuestra oración,
nuestro dolor y alegría, Señor.`
  },
  {
    title: 'Más cerca, oh Dios',
    tone: 'MI',
    lyrics: `Más cerca, oh Dios, de Ti, más cerca, sí,
aunque sea una Cruz que me lleve a Ti.
Si tiende al sol la flor, si el agua busca el mar,
a Ti, mi solo Bien, yo he de buscar.

Mi pobre corazón inquieto está
hasta que en Ti, Señor, encuentre paz.
Abráceme Tu Amor, oh Luz de eternidad.
Cerca de Ti, Señor, quiero morar. 

Refugio es el Señor, no temeré.
Mi fuerza en el dolor, confío en Él.
Si brama y gime el mar, las olas al romper,
conmigo Dios está, no temeré.

Yo creo en Ti, Señor, yo creo en Ti.
Dios vivo en el altar, presente en mí.
Si ciegos al mirar, mis ojos no te ven,
yo creo en Ti, Señor, aumenta mi fe.`
  },
  {
    title: 'Los cielos, la tierra',
    tone: 'RE',
    lyrics: `Los cielos, la tierra, la misma Trinidad,
aclaman, Señora, tu gloria inmortal.

/¡Ave, Ave,
Ave, María!/ (bis)

Llena eres de gracia, de dicha sin par,
y Dios es contigo, contigo su paz.
Bendita entre todas las hijas de Adán;
bendito es el fruto que a luz vas a dar.
¡Oh Santa María, oh Madre de Dios!
a Ti recurrimos confiando en tu amor.`
  },
  {
    title: 'Jesús amoroso',
    tone: 'SOL',
    lyrics: `Jesús amoroso
el más fino amante
quiero en todo instante
sólo en ti pensar

Tú eres mi tesoro
Tú eres mi alegría
Tú eres vida mía
yo te quiero amar
Tú eres vida mía
yo te quiero amar

Oh corazón dulce
de amor abrasado
quiero yo a tu lado
por siempre vivir

Y en tu Llaga Santa
viviendo escondido
de amores herido
en ella morir
de amores herido
en ella morir`
  },
  {
    title: '¡Ave María!',
    tone: 'LA',
    lyrics: `/¡Ave, Ave,
Ave, María!/ (bis)
 
Llena eres de gracia, de dicha sin par,
y Dios es contigo, contigo su paz.
 
Bendita entre todas las hijas de Adán;
bendito es el fruto que a luz vas a dar.
 
¡Oh Santa María, oh Madre de Dios!
a Ti recurrimos confiando en tu amor.`
  },
]

const currentSong = ref(0)
const isShareDialogOpen = ref(false)
const currentUrl = ref('')

const currentSongData = computed(() => songs[currentSong.value])

function nextSong() {
  currentSong.value = (currentSong.value + 1) % songs.length
}

function prevSong() {
  currentSong.value = (currentSong.value - 1 + songs.length) % songs.length
}

function shareToWhatsApp() {
  const text = encodeURIComponent(window.location.href)
  window.open(`https://wa.me/?text=${text}`, '_blank')
}

onMounted(() => {
  currentUrl.value = window.location.href
})

useHead({
  title: 'Misa de Comunión y Confirmación',
  meta: [
    { name: 'description', content: 'Cancionero Novena Inmaculada Bulevares' }
  ]
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header class="bg-white shadow-md p-4 sticky top-0 z-10">
      <div class="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 class="text-xl font-bold mb-2 sm:mb-0">
          Cancionero Novena Inmaculada Bulevares
        </h1>
        <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center" @click="isShareDialogOpen = true">
          <Share2 class="h-5 w-5 mr-2" />
          Compartir
        </button>
      </div>
      <div class="flex justify-between items-center mt-4">
        <button class="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-semibold" @click="prevSong">
          <ChevronLeft class="w-5 h-5 mr-1" />
          Anterior
        </button>
        <span class="text-sm font-semibold">
          Canción {{ currentSong + 1 }}/{{ songs.length }}
        </span>
        <button class="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-semibold" @click="nextSong">
          Siguiente
          <ChevronRight class="w-5 h-5 ml-1" />
        </button>
      </div>
    </header>

    <main class="flex-grow p-4">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <div class="p-4">
          <h2 class="text-2xl font-semibold mb-2">
            {{ currentSong + 1 }}. {{ currentSongData.title }}
          </h2>
          <p class="text-gray-600 mb-4">
            Tono: {{ currentSongData.tone }}
          </p>
          <div class="bg-yellow-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold mb-2 sr-only">
              Letra:
            </h3>
            <pre class="whitespace-pre-wrap font-sans text-gray-800">{{ currentSongData.lyrics }}</pre>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-white shadow-md p-4 text-center text-gray-600">
      <p class="italic">
        "Novena Inmaculada Concepción"
      </p>
    </footer>

    <Teleport to="body">
      <div v-if="isShareDialogOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-bold mb-4">
            Compartir
          </h2>
          <button class="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mb-4" @click="shareToWhatsApp">
            Compartir por WhatsApp
          </button>
          <button class="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg" @click="isShareDialogOpen = false">
            Cerrar
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
@media (max-width: 640px) {
  .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}
</style>
