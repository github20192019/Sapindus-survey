// 为生成的 Android 工程补充定位、相机权限，并写入版本号
const fs = require("fs");
const pkg = require("../package.json");
const mf = "android/app/src/main/AndroidManifest.xml";
let m = fs.readFileSync(mf, "utf8");
const perms = [
  "android.permission.ACCESS_COARSE_LOCATION",
  "android.permission.ACCESS_FINE_LOCATION",
  "android.permission.CAMERA"
];
for (const p of perms) {
  if (!m.includes(p)) m = m.replace("</manifest>", `    <uses-permission android:name="${p}" />\n</manifest>`);
}
if (!m.includes("android.hardware.location.gps")) {
  m = m.replace("</manifest>", `    <uses-feature android:name="android.hardware.location.gps" android:required="false" />\n    <uses-feature android:name="android.hardware.camera" android:required="false" />\n</manifest>`);
}
fs.writeFileSync(mf, m);

const gf = "android/app/build.gradle";
let g = fs.readFileSync(gf, "utf8");
const code = parseInt(process.env.GITHUB_RUN_NUMBER || "1", 10);
g = g.replace(/versionCode\s+\d+/, `versionCode ${code}`).replace(/versionName\s+"[^"]*"/, `versionName "${pkg.version}"`);
fs.writeFileSync(gf, g);
console.log("patched: permissions + version", pkg.version, code);
