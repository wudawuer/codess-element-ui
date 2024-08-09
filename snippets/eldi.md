## eldi
#### Others: Dialog
Element UI <el-dialog>
```
<el-dialog
	title="$1"
	:visible.sync="$2"
	width="${3:30%}"
	@close="$4">
	<span>$5</span>
	<span slot="footer">
		<el-button @click="$2 = false">Cancel</el-button>
		<el-button type="primary" @click="$6">OK</el-button>
	</span>
</el-dialog>
${7}
```