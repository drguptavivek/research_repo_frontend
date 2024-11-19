<script>
	let name = 'Svelte';
    let count = $state(0);
    let numbers = $state([1, 2, 3, 4]);


    let total = $derived(numbers.reduce((t, n) => t + n, 0));


function increment() {
    count += 1;
}

function addNumber() {
    numbers.push(numbers.length + 1);
}


</script>

<h1 class="text-3xl font-bold underline">Hello {name.toUpperCase()}!</h1>


<button class="bg-slate-400 m-2 p-2 border-purple-400 border-2" onclick={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>{numbers.join(' + ')} = ...</p>

<button onclick={addNumber}>
	Add a number
</button>

<p>Total = {numbers.join(' + ')} = {total}</p>


<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.500);
    }
  </style>