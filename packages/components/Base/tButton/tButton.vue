<template>
	<button class="mx-sm">{{ getConf.title || '按钮' }}</button>
</template>

<script>
import defConf from '../../../util/defConf';
export default {
	name: 'tButton',
	props: {
		config: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	computed: {
		getConf() {
			const _cfg = defConf(this.config);
			return _cfg;
		}
	}
};
</script>
