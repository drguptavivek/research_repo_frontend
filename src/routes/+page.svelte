<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, GradientButton  } from 'flowbite-svelte';
</script>


<Navbar>
  <NavBrand href="/">
    <img src=/aiims_logo_currentcolor.svg class="me-2 h-8  md:h-12" alt="AIIMS Logo" />
    <span class="whitespace-nowrap text-base md:text-xl font-semibold dark:text-white">Research Publications</span>
  </NavBrand>
  <div class="flex md:order-2">
    <GradientButton  size="sm" color="teal">Login</GradientButton >
    <NavHamburger />
  </div>
  <NavUl class="order-1">
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>

<h1 class="text-3xl font-bold underline">Hello!</h1>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.200);
    }
</style>