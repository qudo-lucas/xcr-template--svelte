<script>
import state from "shared/stores/state.js";

export let components;
</script>

<div class="card">
    <h1>Home</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis in amet dolor labore eius corrupti alias earum tenetur odio expedita. Sed, natus. Eveniet atque est, qui provident impedit sapiente voluptates!</p>
    <div class="nav">
        <button on:click="{() => $state.send("AUTH")}" >Sign Out</button>
    </div>
</div>
