<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { ChevronLeft, ChevronRight, Share2 } from 'lucide-vue-next'
import { useHead } from '#imports'

const songs = [
  {
    title: 'Ven hermano',
    tone: 'LA',
    lyrics: `Ven hermano y cántale a Cristo,                           
a ese Cristo joven que un día nos redimió. 
Haz de tu amor una plegaria 
o un simple canto alegre que el Señor escuchará.  

Ven aquí, canta ya 
no te olvides, tú, de Cristo. 
Piensa que en la cruz 
por nosotros Él se dio.  

No te alejes del camino marcado, 
que Cristo ha señalado para acercarnos a Él. 
Devuélvele con fe inquebrantable 
el amor incuestionable que nos ha ofrecido Él.`
  },
  {
    title: 'Esto que soy',
    tone: 'SOL',
    lyrics: `A veces me pregunto por qué yo...
y sólo me respondes porque quiero
Es un misterio grande que nos llames
así tal como somos a tu encuentro.
Entonces redescubro la verdad:
mi vida, nuestra vida es un tesoro.
Se trata entonces sólo de ofrecerte
con todo nuestro amor esto que somos. 

¿Que te daré? Que te daremos?
si todo todo es tu regalo.
Te ofreceré, te ofreceremos esto que somos
esto que soy, eso te doy. 

Esto que soy eso es lo que te doy,
esto que somos es lo que te damos.
Tú no desprecias nuestra vida humilde
se trata de poner todo en tus manos.
Aquí van mis trabajos y mi fe,
mis mates mis bajones y mis sueños,
y todas las personas que me diste,
desde mi corazón te las ofrezco. 

Vi tanta gente un domingo de sol,
me sorprendió el latir de tantas vidas
Y adiviné tu brazo gigantezco
y sé que sus historias recibías.
Por eso el altar luce vino y pan:
son signo y homenaje de la vida,
misterio de ofrecerte y recibirnos,
humanidad que Cristo diviniza.`
  },
  {
    title: 'Padre Nuestro Folklórico',
    tone: 'MI',
    lyrics: `Padre nuestro que estás en el cielo,
santificado sea tu Nombre;
venga a nosotros tu Reino;
hágase tu voluntad 
en la tierra como en el cielo.

Danos hoy nuestro pan de cada día;
perdona nuestras ofensas,
como también nosotros perdonamos 
a los que nos ofenden;
no nos dejes caer en la tentación,
y líbranos del mal.`
  },
  {
    title: 'VIDA EN ABUNDANCIA',
    tone: 'MI (capotraste)',
    lyrics: `Los lirios del campo  y las aves del cielo
no se preocupan porque están en mis manos
tené confianza en mí,
acá estoy junto a vos.

Amá lo que sos y tus circunstancias,
estoy con vos, con tu cruz en mi espalda,
todo terminará bien
yo hago nuevas todas las cosas.

Yo vengo a traerte Vida,
Vida en abundancia, en abundancia.
Yo soy el Camino, la Verdad y la Vida,
Vida en abundancia, en abundancia.

No hice al hombre para que esté solo,
caminen juntos como hermanos.
Sopórtense mutuamente,
ámense unos a otros

La felicidad de la vida eterna
empieza conmigo en la tierra
sentite vivo,
la fiesta del reino comienza acá.

Animo tus sueños y tus proyectos,
todas tus búsquedas y tus anhelos
Ya oí tu plegaria,
arrojate a la esperanza.

Subí a mi barca, navegá mar adentro,
en lo profundo está lo verdadero.
Animate a volar,
la aventura de confiar.`
  },
  {
    title: 'CRISTO REINA',
    tone: 'RE',
    lyrics: `Mi corazón quiere alabar, alabarte
Mi corazón quiere adorar, adorarte (bis)

Cristo reina, Cristo reina
Cristo reina, con poder

Mi corazón quiere alabar, alabarte
Mi corazón quiere adorar, adorarte (bis)

Cristo reina, Cristo reina
Cristo reina, con amor`
  },
  {
    title: 'CANCIÓN DE LA COMUNIÓN',
    tone: 'LA (capotraste)',
    lyrics: `Ya no eres pan y vino.
Ahora que eres cuerpo y sangre, vives en mí
De rodillas yo caigo al contemplar tu bondad
¿Cómo no te voy a adorar?
Mientras te pierdes en mis labios
Tu gracia va inundando todo mi corazón
Por esa paz que me llena de alegría mi ser
¿Cómo no te voy a adorar?
Señor Jesús, mi Salvador
Amor Eterno, Amor Divino
Ya no falta nada, lo tengo todo, te tengo a ti
Ya no falta nada, lo tengo todo, te tengo a ti
Dueño y Rey del universo
¿Cómo puede ser posible que busques mi amor?
Tú tan Grande, yo pequeño y te fijas en mí
¿Cómo no te voy a adorar?
De rodillas, yo te pido
Que el día cuando tú me llames, sea como hoy
Para mirarte a los ojos y poderte decir
¿Que, cómo no te voy a adorar?
Señor Jesús, mi Salvador
Amor Eterno, Amor Divino
Ya no falta nada, lo tengo todo, te tengo a ti
Ya no falta nada, lo tengo todo, te tengo a ti
Te tengo a ti`
  },
  {
    title: 'JUNTO A TI MARIA',
    tone: 'RE',
    lyrics: `Junto a ti María,
como un niño quiero estar,
tómame en tus brazos
guíame en mi caminar.
Quiero que me eduques,
que me enseñes a rezar,
hazme transparente,
lléname de paz.

Madre, Madre,
Madre, Madre. (2x)

Gracias Madre mía
por llevarnos a Jesús,
haznos más humildes
tan sencillos como Tú.
Gracias Madre mía
por abrir tu corazón,
porque nos congregas
y nos das tu amor.`
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
  const text = encodeURIComponent(`Misa de Comunión y Confirmación, Barrio Bañado: https://fernandodelperal.github.io/medley/20241123-colastine`)
  window.open(`https://wa.me/?text=${text}`, '_blank')
}

onMounted(() => {
  currentUrl.value = window.location.href
})

useHead({
  title: 'Misa de Comunión y Confirmación',
  meta: [
    { name: 'description', content: 'Misa de Comunión y Confirmación, Barrio Bañado' }
  ]
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header class="bg-white shadow-md p-4 sticky top-0 z-10">
      <div class="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 class="text-xl font-bold mb-2 sm:mb-0">
          Misa de Comunión y Confirmación, Barrio Bañado
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
        "En la Comunión y la Confirmación, nos fortalecemos en Cristo y nos unimos más profundamente a Su Iglesia."
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
