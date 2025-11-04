# 一、项目介绍
这个项目在简单配置基本信息后就可以和ai进行聊天，优点是部署非常简单，而且支持网页和手机app使用，未来会支持记忆检索，目前只有记忆保存功能。缺点是功能有限而且web和app界面比较丑（）  
分为本地和公网两个版本，区别是本地版本app只能在局域网中使用，公网版本app可以在任意一个有网络的地方使用，公网版本需要有公网ip或有公网ip的服务器，对服务器性能无要求，能开机应该就够用了，主要还是用自己的电脑进行推理，公网的只起到一个转发作用。  
# <strong style="color: red;">使用公网版本时一定做好防护措施！！！</strong>
目前仅支持Windows系统。  
## 闲聊部分
这个项目最开始是想用RAG框架来解决ai上下文过长会丢失记忆的问题的，后来改来改去到了现在这样，没有了RAG检索，但是也变得足够简单，下载ollama，下载模型，进行初始配置（世界观，人设等），双击exe文件，就可以用了，支持web和app双端使用，记忆互通，不过目前记忆只是记录，还没做记忆检索功能，过段时间要准备考数据库工程师，暂时没那么多时间来更新了，索性先把目前这个版本发出来。因本人能力确实有限，所以使用ai辅助开发了网络通信、网页和app部分，所以web和app显得蛮简陋的。对了，提一句，app是用HBuilderX把html，css和js文件打包得到的，理论上android studio应该可以本地打包，不过我懒得下了。如果决定使用公网版本一定记得改一个复杂度高的token，我在之前测试的时候有一次弄完忘记关了，第二天一看好几百次访问记录。  
# 二、部署说明
## ollama下载
首先在官网下载ollama安装程序，ollama官网：https://www.ollama.com   
Ollama会默认下载到c盘，因此需要手动安装至指定文件夹，当然，你c盘够大可以跳过这一步，ollama本体大概有4.5g，记得改模型下载地址就行。  
在ollama的安装程序OllamaSteup.exe所在文件夹右键，然后点击在终端中打开，输入ollamasetup.exe /DIR=文件夹路径，文件夹路径是指你要把ollama安装到的位置，大概格式是D:\文件夹1\文件夹2 这样。  
<img width="865" height="437" alt="image" src="https://github.com/user-attachments/assets/785ebd5f-61a3-430e-a5c9-839a520082d3" />  
可以点击图片中标注的位置复制文件夹路径  
然后双击OllamaSetup.exe启动安装程序安装即可  
在正式安装模型前，需要更改模型下载位置，默认是下载到c盘，会占用大量c盘内存。  
按住win键（win是fn和alt中间的键）然后在按r键，在弹出的框中输入cmd然后按回车，输入setx OLLAMA_MODELS 模型安装位置，模型安装位置大概格式是D:\文件夹1\文件夹2 这样。  
在ollama官网中选择模型进行下载  
<img width="865" height="403" alt="image" src="https://github.com/user-attachments/assets/12b93ef4-f166-4557-8ac6-8b0515c54507" />  
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
项目部署还是很简单的，下载Releases中的压缩包，解压后应该是一个config的文件夹、一个双击启动.exe文件和一个PA4.apk文件，如下图示例：  
<img width="775" height="148" alt="image" src="https://github.com/user-attachments/assets/77f5abb7-a52d-4f12-bc6b-8fd5f15ffe24" />  
apk文件图标不同是正常的，这个会因为默认打开程序不同而不同
随便把它们放到一个你能找到的地方就可以，然后打开config文件，对里面的文件进行修改，里面有的文件如下图所示：
<img width="783" height="273" alt="image" src="https://github.com/user-attachments/assets/df99a07f-b1b8-48ce-aefe-309d0c63f890" />  
没有后缀的.txt不要紧，只是没开显示后缀名，不用管这个。  
index.html这个文件不用管，是网页文件。  
token.txt是在app上连接时所需要输入的token，主要是防止公网版本被攻击用的，因为我先做的公网版本所以本地版本也有这个，本地版本可以改一个简单方便输入的token。一行即可，不要输入两行。  
模型名称.txt是要使用的模型，需要带着参数的全称，如qwen2.5:7b，llama3.1:8b 这样的。  
人设.txt是AI要扮演的角色的人设，嗯，具体可以参考我写的明日方舟玫兰莎的。  
世界观.txt是AI要扮演角色的世界观，如果没有特殊世界观可以不写留空，明日方舟的角色可以直接使用我写的世界观。  
我写的世界观由哔哩哔哩up主艾云的黄钻天空的[超全《明日方舟》剧情党入坑指南-世界观及基础概念篇](https://www.bilibili.com/video/BV1dQ4y137Zu/?spm_id_from=333.1391.0.0&vd_source=3c93982b8e40bd0f7c2e71089312cbd7)修改得到。
apk文件直接在手机上安装即可，可能会申请各种权限，除了网络权限都可以拒绝，打包成app时默认会添加索要各种权限，我不知道怎么关，拒绝即可。
#### 使用说明
上述文件都配置好后，双击exe文件启动即可，正常启动如下图所示：  
<img width="1458" height="597" alt="image" src="https://github.com/user-attachments/assets/d7fef872-1244-4096-a063-153a6c093b3a" />  
倒数第二行的ip不同是正常的。  
此时，在浏览器输入http://127.0.0.1:8080或按住ctrl键单击http://127.0.0.1:8080处都可以打开网页端。  
app安装后点击右上角设置，会弹出如下界面：
<img width="319" height="230" alt="image" src="https://github.com/user-attachments/assets/d8f6e5ce-062d-4e95-8cfb-42a5cc9c5626" />  
在服务器地址那一行填入倒数第二行的ip，如http://172.21.141.85:8080。  
在授权Token那一行填入token.txt文件中输入的token即可。  
然后就可以和AI聊天了。  
聊天记录会保存在history文件夹中以年-月-日_时命名的json文件中，可以右键选择在记事本中编辑查看。
