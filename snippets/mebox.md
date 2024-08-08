## mebox
#### Notice: Messagebox
Element UI $msgbox
```
this.\$msgbox({
	title: '$1',
	message: '${2}',
	showCancelButton: true,
	confirmButtonText: '${3:OK}',
	cancelButtonText: '${4:Cancel}',
	center: ${5:false},
	beforeClose: (action, instance, done) => {
		${6}
	}
}).then(action => {
	${7}
}).catch(() => {
	${8}
});
${9}
```