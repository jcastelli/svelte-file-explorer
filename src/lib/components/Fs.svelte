<script>
  import dummy from '$lib/imports/dummy.fs.js'

	import Item from './Item.svelte'
</script>

<ul class="fs">
  { #each dummy.fs.simple as item, index }
    <li>
      <Item obj={ item } index />
    </li>
  { /each }
</ul>

<style>
  ul {
    list-style: none;
  }
</style>