# 无患子调查（安卓 App）

无患子种质资源鉴定评价野外调查 App。完全离线运行，数据保存在手机本机，多人调查通过“数据包”汇总。

## 一、生成 APK（只需做一次，约 10 分钟）

1. 注册并登录 GitHub（https://github.com）。
2. 右上角“+” → New repository，名称填 `sapindus-survey`，选 Public，勾选 Add a README file，点 Create repository。
3. 在仓库页点 Add file → Upload files，把本压缩包解压后的**全部内容**（含 `.github` 文件夹）拖进去，点 Commit changes。
   - 网页上传有时会漏掉以“.”开头的文件夹。若上传后仓库里看不到 `.github`，请点 Add file → Create new file，文件名输入 `.github/workflows/build-apk.yml`，把本包中同名文件的内容粘贴进去再提交。
4. 进入仓库的 Actions 页，会自动开始“打包安卓 APK”，约 5～8 分钟变绿。
5. 回到仓库首页，右侧 Releases 里即有 `sapindus-survey-vN.apk`，下载链接可直接发给调查队员。

## 二、安装

用手机浏览器或微信打开 APK 下载链接（微信内需“在浏览器打开”），下载后点安装，按提示允许“安装未知来源应用”。首次拍照、定位时允许相机和位置权限。

## 三、使用要点

- 无需联网；卸载 App 或清除 App 数据会删除全部记录，请定期“导出数据包”备份。
- 多人调查：各人“导出数据包”发给汇总人，汇总人“导入数据包”后统一“导出 Excel”“导出照片”。重复导入同一数据包不会产生重复记录。
- 换手机：旧手机导出数据包，新手机导入。

## 四、修改后重新打包

修改 `www/index.html` 并提交，Actions 会自动打新版本；新版本直接覆盖安装，数据保留。
