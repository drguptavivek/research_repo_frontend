<script lang="ts">

import { onMount } from "svelte";


const baseURL = "https://rpcapplication.aiims.edu/researchrepository";
const API_ID = "43576556-30fd-483c-b95a-28da3a950388";



let response: any[] =  [];
let gettingQuote = false;


onMount(() => {
    setSession();
//      getArticleList();
 });
	

async function getSession () {
    const apiHeaders = new Headers();
    apiHeaders.append("API-ID", API_ID);
    const request = new Request (baseURL+"/api/public/generateSession", {
        method : "GET",
        headers: apiHeaders,
    })
    const res = await fetch(request);
    const sessionData = await res.json();
    return sessionData;
}  

async function setSession() {
    let sessionData = await getSession();
    let session_id: string = sessionData["Session-ID"];
    let session_salt: string = sessionData["Session-SALT"];

    const currentTime: Date = new Date()
    let expiryTime: Date = new Date (currentTime.valueOf() + (1000*60*60*24));
    

    localStorage.setItem("Session-ID", session_id);
    localStorage.setItem("Session-SALT", session_salt);
    localStorage.setItem("Expiry", expiryTime.toString());

        
    console.log(session_id);
    console.log(session_salt);
    console.log(expiryTime);

}


async function getArticleList() {

    const apiHeaders = new Headers();
    apiHeaders.append();
    apiHeaders.append("Content-Type", "application/json");

    const request = new Request ("https://rpcapplication.aiims.edu/researchrepository/api/article/table", {
        method : "GET",
        headers: apiHeaders,
    })

    console.log(request);
    const res = await fetch(request);
    const json = await res.json();
    console.log(json);
    response = [...response, json];
    gettingQuote = false;
    console.log(response);
}


</script>

<section class="container  mx-auto">
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
</section>

<p> Hello Again</p>

<div >
    {#each response as {data, page, total_pages}}
    <p class="my-2 p-4 bg-slate-400">{page} - {total_pages}</p>
    <p> Artcle: {data[0]}</p>
    {/each}

<button on:click={getArticleList} disabled={gettingQuote} class="btn btn-primary">Get Quote</button>
{#if gettingQuote}
     <span>Getting Quote...</span>
{/if}

</div>