# 一、项目介绍
这个项目在简单配置基本信息后就可以和ai进行聊天，优点是部署非常简单，而且支持网页和手机app使用，未来会支持记忆检索，目前只有记忆保存功能。缺点是功能有限而且web和app界面比较丑（）
目前仅支持Windows系统。
## 闲聊部分
这个项目最开始是想用RAG框架来解决ai上下文过长会丢失记忆的问题的，后来改来改去到了现在这样，没有了RAG检索，但是也变得足够简单，下载ollama，下载模型，进行初始配置（世界观，人设等），双击exe文件，就可以用了，支持web和app双端使用，记忆互通，不过目前记忆只是记录，还没做记忆检索功能，过段时间要准备考数据库工程师，暂时没那么多时间来更新了，索性先把目前这个版本发出来。因本人能力确实有限，所以使用ai辅助开发了网络通信、网页和app部分，所以web和app显得蛮简陋的。对了，提一句，app是用HBuilderX把html，css和js文件打包得到的，理论上android studio应该可以本地打包，不过我懒得下了。
# 二、部署说明
## ollama下载
首先在官网下载ollama安装程序，ollama官网：https://www.ollama.com
Ollama会默认下载到c盘，因此需要手动安装至指定文件夹，当然，你c盘够大可以跳过这一步，ollama本体大概有4.5g，记得改模型下载地址就行。
在ollama的安装程序OllamaSteup.exe所在文件夹右键，然后点击在终端中打开，输入ollamasetup.exe /DIR=文件夹路径，文件夹路径是指你要把ollama安装的位置
<img width="865" height="437" alt="image" src="https://github.com/user-attachments/assets/785ebd5f-61a3-430e-a5c9-839a520082d3" />
可以点击图片中标注的位置复制文件夹路径
然后双击OllamaSetup.exe启动安装程序安装即可
在正式安装模型前，需要更改模型下载位置，默认是下载到c盘，
按住win键（win是fn和alt中间的键）然后在按r键，在弹出的框中输入cmd然后按回车，输入setx OLLAMA_MODELS 模型安装位置，模型安装位置参考上面写的方法进行输入
在ollama官网中选择模型进行下载

