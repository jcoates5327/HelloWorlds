import os

with open("hello_world_list.js", "w") as hello_file:
	hello_file.write("const hello_worlds = {\n")
	
	for file in os.scandir(os.path.join(os.getcwd(), 'hello_worlds')):
		if file.path.endswith(".txt"):
			print("Adding:", file.name.split('.')[0])
			
			with open(file.path, "r") as in_file:
				lang_name = file.name.split('.')[0]
				
				out = f'`\n<div class="code" id="{lang_name.lower()}"><p>\n'
				out += in_file.read().replace("\t", "&nbsp;&nbsp;&nbsp;&nbsp;").replace("\n", "<br/>\n").replace(" ", "&nbsp;")
				out += '\n</p></div>\n`'
				
				hello_file.write(f'\t"{lang_name}": {out},\n')
	
	hello_file.write("};")