## elsubmen
#### Navigation: NavMenu subMenu
Element UI <el-submenu> with <el-menu-item>
```
<el-submenu :index="$1">
	<template slot="title">$2</template>
	<el-menu-item v-for="(${3:item}, ${4:subIndex}) in $5"
		:index="${4:subIndex} + 1"
		:key="${3:item}.${6:key}">
			{{${3:item}.${7:title}}}
	</el-menu-item>
</el-submenu>
${8}
```