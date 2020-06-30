<script>
import state from "shared/stores/state.js";
</script>

<form>
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
</form>
<div class="nav">
    <button on:click="{() => $state.send("NEXT")}">Next</button>
</div>