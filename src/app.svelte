<script>	
import { components } from "shared/service.js";

import Children from "shared/components/children/children.svelte";
</script>

<div class="view">
	<Children components={$components} />
</div>
