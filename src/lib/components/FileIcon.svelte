<script>
  import getExtensionIcon from '$lib/imports/getExtensionIcon.js'

  import Fa from 'svelte-fa'
  import { faFile } from '@fortawesome/free-solid-svg-icons'

  export let ext

  $: icon = getExtensionIcon(ext)
</script>

<Fa icon={ icon } />