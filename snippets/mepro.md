## mepro
#### Notice: Messagebox Prompt
Element UI $prompt
```
this.\$prompt('${1:content}', '${2:title}', {
	confirmButtonText: '${3:OK}',
	cancelButtonText: '${4:Cancel}',
	inputPattern: / ${5} /,
	inputErrorMessage: '${6}',
}).then(({ value }) => {
	${7}
}).catch(() => {
	${8}
});
${9}
```