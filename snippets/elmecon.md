## elmecon
#### Notice: Messagebox Confirm
Element UI $confirm
```
this.\$confirm('${1:content}', '${2:title}', {
	confirmButtonText: '${3:OK}',
	cancelButtonText: '${4:Cancel}',
	type: '${5|success,info,warning,erro|}',
}).then(action => {
	${6}
}).catch(() => {
	${7}
});
${8}
```