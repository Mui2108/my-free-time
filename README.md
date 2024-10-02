# Frontend Practice Components

Repository นี้เป็นส่วนหนึ่งของการฝึกฝนการพัฒนา Frontend Components โดยประกอบไปด้วยตัวอย่างการสร้าง Components ต่างๆ เพื่อเป็นแนวทางในการเรียนรู้และพัฒนาทักษะ

## Components List

### 1. Dock Component

Dock Component เป็นการจำลอง dock bar แบบ macOS โดยมีคุณสมบัติดังนี้:

- แสดงไอคอนแอพพลิเคชันในรูปแบบ dock
- มี animation เมื่อ hover ที่ไอคอน (zoom effect)
- รองรับการคลิกเพื่อเปิดใช้งานแอพพลิเคชัน
- สามารถปรับแต่งขนาดและตำแหน่งของ dock ได้

### 2. Carousel Icon

Carousel Icon เป็น component สำหรับแสดงรูปภาพหรือไอคอนแบบหมุนเวียน:

- แสดงไอคอนหรือรูปภาพแบบ slideshow
- มีปุ่มควบคุมสำหรับเลื่อนไปข้างหน้าและถอยหลัง
- รองรับการแสดงผลแบบ auto-play
- สามารถกำหนดระยะเวลาในการเปลี่ยนรูปได้
- รองรับการแสดงผลบนอุปกรณ์ขนาดต่างๆ (responsive)

### 3. Chart

Chart Component สำหรับแสดงข้อมูลในรูปแบบกราฟต่างๆ:

- รองรับการแสดงผลกราฟหลายรูปแบบ (Line, Bar, Pie chart)
- สามารถปรับแต่งสี และรูปแบบการแสดงผลได้
- มี tooltip สำหรับแสดงข้อมูลเพิ่มเติม
- รองรับการอัพเดทข้อมูลแบบ real-time
- สามารถ export เป็นรูปภาพได้

## การติดตั้งและการใช้งาน

1. Clone repository:

```bash
git clone https://github.com/Mui2108/my-free-time.git
```

2. ติดตั้ง dependencies:

```bash
pnpm install
```

3. รันโปรเจค:

```bash
pnpm dev
```

## เทคโนโลยีที่ใช้

- React.js
- Tailwind CSS
