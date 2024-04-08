<script>
  const currentTime = new Date()
  const hours = currentTime.getHours()

  let greeting = ''

  if (hours < 12) {
    greeting = 'Buenos días'
  } else if (hours < 19) {
    greeting = 'Buenas tardes'
  } else {
    greeting = 'Buenas noches'
  }
</script>

<h1 class="text-3xl font-bold pt-6">{greeting}</h1>
