<script>
import state from "shared/stores/state.js";
</script>

<form>
    <input type="text" placeholder="First Name" />
    <input type="text" placeholder="Last Name" />
    <input type="text" placeholder="Email" />
    <input type="text" placeholder="Phone" />
</form>
<div class="nav">
    <button on:click="{() => $state.send("BACK")}">Back</button>
    <button on:click="{() => $state.send("HOME")}">Finish</button>
</div>