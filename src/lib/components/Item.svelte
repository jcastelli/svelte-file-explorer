<script>
  import Fa from 'svelte-fa'
  import { faFolder } from '@fortawesome/free-solid-svg-icons'

  import { isEmpty } from '$lib/imports/functions.js'

  import FileIcon from './FileIcon.svelte'

  import Debug from './Debug.svelte'

  /**@type {object|undefined}*/
  export let obj = undefined

  /**@type {integer|undefined}*/
  export let index

  $: ext = obj.hasOwnProperty('ext') ? obj.ext : undefined
  $: title = obj.hasOwnProperty('title') ? obj.title : ''
  $: children = !obj.hasOwnProperty('children') ? undefined : obj.children
  $: isFolder = children && !ext
</script>

<div class="item lvl-{ index } { isFolder ? 'folder' : 'item' }">
  <!-- <Debug data={obj} /> -->
  { #if obj && typeof obj === 'object' && !obj.length && !isEmpty(obj) }
    { #if isFolder }
      <Fa icon={faFolder} />
    { :else }
      <FileIcon ext={ ext } />
    { /if }
    { title ? title : 'no-title' }{ ext ? `.${ ext }` : '' }
    { #if children }
      <ul class="children">
        { #each children as child, index }
          <svelte:self obj={ child } index />
        { /each }
      </ul>
    { /if}
  { /if }
</div>