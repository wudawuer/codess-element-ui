## cbg
#### Form: Checkbox Button Group
Element UI <el-checkbox-group> with <el-checkbox-button>
```
<el-checkbox-group v-model="$1" size="${2|normal,medium,small,mini|}"  @change="${3}">
	<el-checkbox-button v-for="${4:item} in ${5:items}" :key="${4:item}.${6:key}" :label="${4:item}.${7:label}">
		{{${4:item}.${8:label}}}
	</el-checkbox-button>
</el-checkbox-group>
${9}
```