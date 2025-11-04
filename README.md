# 一、项目介绍
这个项目在简单配置基本信息后就可以和ai进行聊天，优点是部署非常简单，而且支持网页和手机app使用，未来会支持记忆检索，目前只有记忆保存功能。缺点是功能有限而且web和app界面比较丑（）
分为本地和公网两个版本，区别是本地版本app只能在局域网中使用，公网版本app可以在任意一个有网络的地方使用，公网版本需要有公网ip或有公网ip的服务器，对服务器性能无要求，能开机应该就够用了，主要还是用自己的电脑进行推理，公网的只起到一个转发作用。
# <span style="color: red; font-size: 32px; font-weight: bold;">使用公网版本一定一定做好防护措施！！！</span>\n
目前仅支持Windows系统。
## 闲聊部分
这个项目最开始是想用RAG框架来解决ai上下文过长会丢失记忆的问题的，后来改来改去到了现在这样，没有了RAG检索，但是也变得足够简单，下载ollama，下载模型，进行初始配置（世界观，人设等），双击exe文件，就可以用了，支持web和app双端使用，记忆互通，不过目前记忆只是记录，还没做记忆检索功能，过段时间要准备考数据库工程师，暂时没那么多时间来更新了，索性先把目前这个版本发出来。因本人能力确实有限，所以使用ai辅助开发了网络通信、网页和app部分，所以web和app显得蛮简陋的。对了，提一句，app是用HBuilderX把html，css和js文件打包得到的，理论上android studio应该可以本地打包，不过我懒得下了。
# 二、部署说明
## ollama下载
首先在官网下载ollama安装程序，ollama官网：https://www.ollama.com \n
Ollama会默认下载到c盘，因此需要手动安装至指定文件夹，当然，你c盘够大可以跳过这一步，ollama本体大概有4.5g，记得改模型下载地址就行。\n
在ollama的安装程序OllamaSteup.exe所在文件夹右键，然后点击在终端中打开，输入ollamasetup.exe /DIR=文件夹路径，文件夹路径是指你要把ollama安装到的位置，大概格式是D:\文件夹1\文件夹2 这样。\n
<img width="865" height="437" alt="image" src="https://github.com/user-attachments/assets/785ebd5f-61a3-430e-a5c9-839a520082d3" />\n
可以点击图片中标注的位置复制文件夹路径\n
然后双击OllamaSetup.exe启动安装程序安装即可\n
在正式安装模型前，需要更改模型下载位置，默认是下载到c盘，会占用大量c盘内存。\n
按住win键（win是fn和alt中间的键）然后在按r键，在弹出的框中输入cmd然后按回车，输入setx OLLAMA_MODELS 模型安装位置，模型安装位置大概格式是D:\文件夹1\文件夹2 这样。\n
在ollama官网中选择模型进行下载\n
<img width="865" height="403" alt="image" src="https://github.com/user-attachments/assets/12b93ef4-f166-4557-8ac6-8b0515c54507" />\n
模型参数可从标注位置看出，根据自己电脑显存选择即可,具体可以参考下面的表格，当然，仅供参考，具体模型参数还是要根据模型推理速度决定，速度太慢真的很折磨。
| GPU 配置 | 支持的最大模型大小 |
|:---------|:------------------:|
| 没有 GPU | 1.5B              |
| 4G GPU   | 8B                |
| 8G GPU   | 32B               |
| 16G GPU  | 32B               |
| 24G GPU  | 70B               |
选好模型后点击模型名称
<img width="865" height="394" alt="image" src="https://github.com/user-attachments/assets/ef15d177-5bb1-459f-8e2c-8b23b2862b63" />
点击标注的左侧选择具体模型参数，然后点击右侧进行复制，按住win键（win是fn和alt中间的键）然后在按r键，在弹出的框中输入cmd然后按回车，粘贴后回车模型即可开始下载。
## 部署项目
### 本地版本
项目部署还是很简单的，下载Releases中的压缩包，解压后应该是一个config的文件夹和一个exe文件，如下图示例：
<img width="793" height="141" alt="屏幕截图 2025-11-04 144532" src="https://github.com/user-attachments/assets/0d3d1cbb-12ec-4eff-b5df-5f750e09d3e9" />
随便把它们放到一个你能找到的地方就可以，然后打开config文件，对
