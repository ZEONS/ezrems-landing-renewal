const fs = require('fs');
const path = require('path');

const landmarkDir = path.join(__dirname, 'resources', 'images', 'landmark');
const jsonPath = path.join(landmarkDir, 'landmarks.json');

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

try {
    if (!fs.existsSync(landmarkDir)) {
        console.error('❌ 랜드마크 디렉토리를 찾을 수 없습니다:', landmarkDir);
        process.exit(1);
    }

    const files = fs.readdirSync(landmarkDir);
    const imageFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return IMAGE_EXTENSIONS.has(ext);
    });

    fs.writeFileSync(jsonPath, JSON.stringify(imageFiles, null, 2), 'utf-8');
    console.log('✅ [ezREMS] 랜드마크 이미지 목록이 성공적으로 동기화되었습니다!');
    console.log('📁 등록된 이미지 (' + imageFiles.length + '개):', imageFiles.join(', '));
    console.log('📄 매니페스트 파일 갱신 완료: ' + jsonPath);
} catch (err) {
    console.error('❌ 동기화 중 오류 발생:', err.message);
    process.exit(1);
}
