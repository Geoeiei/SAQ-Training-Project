//ข้อมูลการฝึก
const exercisesData = {
    speed: [
        {
            id: 1,
            title: "High Knee Marching",
            description: "ฝึกการยกเข่าสูงและเพิ่มความแข็งแรงของสะโพก",
            fullDescription: "เป็นการก้าวยกเข่าสูงแบบช้าๆและมีจังหวะ ใช้ฝึกท่าทางการวิ่งที่ถูกต้อง (running form) ความแข็งแรงของสะโพก และการประสานงานของแขนและขา",
            steps: [
                "ยืนตรงเตรียมพร้อม แขนอยู่ข้างลำตัว",
                "ก้าวเดินไปข้างหน้า พร้อมยกเข่าสูงทำมุม 90 องศาและให้ต้นขาขนานพื้น",
                "ขณะที่ยกเข่า ให้แกว่งแขนตรงข้ามกับขา (ซ้าย-ขวาสลับกัน)",
                "ควบคุมจังหวะให้ต่อเนื่อง ค่อยๆทำไม่ต้องทำรีบเกินไป"
            ],
            tips: [
                "โฟกัสที่การยกเข่าให้ขนานพื้น",
                "หลังตรง ไม่เอนไปข้างหลัง",
                "ก้าวมั่นคง ไม่รีบเกินไป"
            ],
            videoUrl: "https://youtu.be/e8WPGa3VJnk?si=OPR-_QhGZoYXxO6q",
            videoType: "youtube"
        },
        {
            id: 2,
            title: "Low Knee",
            description: "พัฒนาความเร็วในการซอยเท้า และความแข็งแร็งของข้อเท้า",
            fullDescription: "ฝึกวิ่งโดยยกเข่าต่ำ เน้นความถี่ของก้าว (stride frequency) และการเคลื่อนไหวต่อเนื่อง",
            steps: [
                "ยืนเตรียมพร้อมในท่าวิ่ง",
                "เริ่มวิ่งซอยเท้าเร็วๆ โดยยกเข่าเพียงเล็กน้อยทำมุม 45 องศา",
                "เท้าลงด้วยปลายเท้า รักษาจังหวะให้เร็วและเบา"
            ],
            tips: [
                "ก้าวให้เร็วและเบา",
                "รักษาลำตัวนิ่ง ไม่กระเด้งสูง",
                "เน้นความต่อเนื่องมากกว่าความสูงของเข่า"
            ],
            videoUrl: "https://youtu.be/Oio0sXGl5wc",
            videoType: "youtube"
        },
        {
            id: 3,
            title: "High Knee",
            description: "พัฒนาความเร็วในการซอยเท้า และความแข็งแรงของข้อเท้าและสะโพก",
            fullDescription: "วิ่งยกเข่าสูง พัฒนาความเร็วรอบขา ความแข็งแรงของแกนลำตัว (core) และกล้ามเนื้อต้นขาส่วนบน (hip flexor) รวมถึงท่าทางการวิ่ง",
            steps: [
                "ยืนในท่าวิ่งปกติ",
                "วิ่งไปข้างหน้า โดยยกเข่าสูงทำมุม 90 องศาและให้ต้นขาขนานกับพื้น",
                "ลงเท้าด้วยปลายเท้า พร้อมแกว่งแขน 90 องศา",
                "รักษาความเร็วและจังหวะอย่างต่อเนื่อง"
            ],
            tips: [
                "ลงปลายเท้าอย่างนุ่มนวล",
                "รักษาจังหวะสม่ำเสมอ",
                "ใช้แขนแกว่งช่วยเพื่อให้ได้ momentum"
            ],
            videoUrl: "https://youtu.be/shE9D-bC6os?si=F1tRitWbaem8sCoZ",
            videoType: "youtube"
        },
        {
            id: 4,
            title: "Butt Kicks",
            description: "เพิ่มความถี่ในการซอยเท้าและความแข็งแรงของหน้าขา",
            fullDescription: "การวิ่งโดยส้นเท้าเตะไปแตะก้น ฝึกความยืดหยุ่นของต้นขาด้านหน้า (quadriceps flexibility) และความเร็วในการหมุนขาให้สัมผัสกับพื้น (speed leg turnover)",
            steps: [
                "ยืนตรง เตรียมทำท่าวิ่งไปข้างหน้า",
                "นำหลังมือทั้งสองข้างไปแตะที่ก้น",
                "ขณะวิ่ง ให้ส้นเท้าเตะไปแตะก้น ทำซ้าย-ขวากลับกัน"
            ],
            tips: [
                "วิ่งตัวตรง ไม่เอนไปข้างหน้า",
                "จังหวะเร็ว ไม่ก้าวยาวเกินไป",
                "รักษาแกนลำตัว (core) ให้มั่นคง"
            ],
            videoUrl: "https://youtu.be/Ze8e4xUYc3E",
            videoType: "youtube"
        },
        {
            id: 5,
            title: "A-Skips",
            description: "เพิ่มความเร็วการเหยียดยืดของสะโพก และความแข็งแรงในการงอสะโพก",
            fullDescription: "การสกิปพร้อมยกเข่า เน้นการก้าวเท้าที่ถูกต้อง (running mechanics) และจังหวะ (rhythm) ของการวิ่ง",
            steps: [
                "ยืนตรงเตรียมพร้อม",
                "กระโดดสกิป (skips) สลับขาซ้าย–ขวา โดยยกเข่าให้สูงทำมุม 90 องศา",
                "แขนแกว่งตรงข้ามกับขา (ซ้าย-ขวาสลับกัน)",
                "เคลื่อนไปข้างหน้าอย่างต่อเนื่อง"
            ],
            tips: [
                "ยกเข่าสูงและควบคุมจังหวะ ให้มากกว่าการเคลื่อนไปข้างหน้า",
                "ลงเท้าเบาและเป็นจังหวะ พยายามไม่รีบ",
                "ใช้แขนช่วยให้จังหวะต่อเนื่อง"
            ],
            videoUrl: "https://youtu.be/E9d0fWFmIKI",
            videoType: "youtube"
        },
        {
            id: 6,
            title: "Low Knee บนรั้ว",
            description: "พัฒนาความเร็วในการซอยเท้า และความแข็งแรงของข้อเท้า",
            fullDescription: "การก้าวยกเข่าต่ำข้ามรั้ว เน้นการฝึกการประสานกับของเท้า (coordination footwork) และความคล่องแคล่ว (agility)",
            steps: [
                "วางรั้วเตี้ยเรียงเป็นแถว",
                "ยืนเตรียมตัวหน้าแถวรั้ว",
                "ซอยเท้าเร็วๆ ข้ามรั้วโดยยกเข่าต่ำ (Low Knee)",
                "เคลื่อนไหวต่อเนื่องจนจบรั้วทั้งหมด"
            ],
            tips: [
                "เคลื่อนไหวต่อเนื่องไม่หยุดชะงัก",
                "ระวังไม่ให้สะดุดรั้ว",
                "ก้าวขาให้มั่นคงและเร็ว",
                "ค่อยๆฝึกให้ชำนาญก่อน จึงค่อยเพิ่มความเร็ว"
            ],
            videoUrl: "https://youtu.be/VRSY4wpzm4g",
            videoType: "youtube"
        },
        {
            id: 7,
            title: "High Knee บนรั้ว",
            description: "พัฒนาความเร็วในการซอยเท้า และความแข็งแรงของข้อเท้าและสะโพก",
            fullDescription: "ก้าวยกเข่าสูงข้ามรั้ว ฝึกการเคลื่อนไหวช่วงขาที่กว้างขึ้น การเคลื่อนไหวของสะโพก (hip mobility) และความแข็งแรง",
            steps: [
                "วางรั้วเรียงต่อกันเป็นแถว",
                "ยืนเตรียมตัวหน้าแถวรั้ว",
                "ซอยเท้า ยกเข่าสูง (High Knee) ข้ามรั้วทีละอัน",
                "เคลื่อนไหวต่อเนื่องจนจบรั้วทั้งหมด"
            ],
            tips: [
                "ยกเข่าสูงพอดีไม่กระโดดเกิน",
                "ลงเท้าเบาและต่อเนื่อง",
                "รักษาสมดุลลำตัว"
            ],
            videoUrl: "https://youtu.be/IVToBbpJswo",
            videoType: "youtube"
        },
        {
            id: 8,
            title: "A-Skips บนรั้ว",
            description: "เพิ่มความเร็วการเหยียดยืดของสะโพก และความแข็งแรงในการงอสะโพก",
            fullDescription: "สกิปข้ามรั้ว ฝึกการประสานงานของร่างกาย (coordination) ความสมดุลของร่างกาย (balance) และความคล่องแคล่ว (agility)",
            steps: [
                "วางรั้วเรียงต่อกันเป็นแถว",
                "ยืนเตรียมตัวหน้าแถวรั้ว",
                "ทำการสกิปข้ามรั้ว โดยยกเข่าสูง ( A-Skips )",
                "เคลื่อนไหวต่อเนื่องจนจบรั้วทั้งหมด"
            ],
            tips: [
                "รักษาให้จังหวะสม่ำเสมอ",
                "ระวังไม่สะดุดรั้ว",
                "ใช้แขนแกว่งให้เป็นจังหวะ (rhythm)"
            ],
            videoUrl: "https://youtu.be/RAnAseHOrK0",
            videoType: "youtube"
        },
        {
            id: 9,
            title: "Wall Speedy",
            description: "เพิ่มความเร็วในการกระตุกเข่าซอยเท้า แบบเป็นจังหวะ",
            fullDescription: "ฝึกวิ่งอยู่กับที่โดยใช้กำแพงช่วยพยุง พัฒนาสปีดรอบขา (leg speed) รักษาความมั่นคงของร่างกาย (core stability) และเทคนิค",
            steps: [
                "ยืนเอียงตัวเล็กน้อย พิงมือที่กำแพง",
                "ซอยเท้าเร็วๆอยู่กับที่ รอฟังสัญญาณจากผู้ฝึก",
                "เมื่อได้รับสัญญาณให้กระตุกเข่า โดยยกเข่าเร็วและสูงระดับสะโพกเล็กน้อย (Low Knee)"
            ],
            tips: [
                "เอียงตัวเล็กน้อยไปข้างหน้า",
                "ยกเข่าเร็ว ลงเท้าด้วยปลายเท้า",
                "รักษาแกนลำตัว (core) ให้มั่นคงและไม่บิดเอว"
            ],
            videoUrl: "https://youtu.be/43sO5S3nNpU",
            videoType: "youtube"
        }
    ],
    agility: [
        {
            id: 10,
            title: "วิ่ง 30 หลา เป็นรูปตัว T (T-Drill)",
            description: "พัฒนาความคล่องแคล่วว่องไว การประสานงานของกล้ามเนื้อ และความยืดหยุ่นของกล้ามเนื้อที่ใช้ในการกางและหุบ พัฒนาความแข็งแรง",
            fullDescription: "การวิ่งเปลี่ยนทิศทางตามรูปตัว T ฝึกความคล่องแคล่ว (agility) การเร่งและหยุดเร็ว และการเปลี่ยนทิศทาง",
            steps: [
                "วางกรวยเป็นรูปตัว T",
                "วิ่งตรงไปยังกรวยด้านหน้า",
                "สไลด์ขวา ไปที่กรวยขวาสุด",
                "สไลด์ซ้าย ไปที่กรวยซ้ายสุด",
                "กลับมาที่กรวยกลาง",
                "วิ่งถอยหลังกลับจุดเริ่มต้น"
            ],
            tips: [
                "ลดลำตัวต่ำขณะเปลี่ยนทิศทาง",
                "ฝึกใช้ทั้งซ้ายและขวาให้สมดุล",
                "วิ่งเต็มสปีดในช่วงตรง"
            ],
            videoUrl: "https://youtu.be/WysRECzzfmE",
            videoType: "youtube"
        },
        {
            id: 11,
            title: "วิ่งซิกแซก (Zig-Zag)",
            description: "พัฒนาการเคลื่อนที่และความไว",
            fullDescription: "วิ่งเปลี่ยนทิศทางซ้าย-ขวาสลับกัน พัฒนาความคล่องตัว ความสมดุลของร่างกาย (balance) และการควบคุมทิศทาง",
            steps: [
                "วางกรวย ห่างกันประมาณ 1 หลา",
                "เริ่มสไลด์จากกรวยแรก และซิกแซกสลับซ้าย–ขวาจนจบ"
            ],
            tips: [
                "ก้าวสั้นและมั่นคง",
                "รักษาจังหวะไม่ให้เสียตอนเปลี่ยนทาง",
                "ใช้สายตาโฟกัสเส้นทางล่วงหน้า ไม่มองลงที่พื้น"
            ],
            videoUrl: "https://youtu.be/X_cdTeTIG3o",
            videoType: "youtube"
        },
        {
            id: 12,
            title: "เคลื่อนไหวหลายทิศทางไปยังกรวย (Cone Drill)",
            description: "พัฒนาความสามารถในการเปลี่ยนทิศทาง ต้าแหน่งของร่างกายและความสามารถในการวิ่งตัด",
            fullDescription: "เคลื่อนไหวไปยังกรวยตามที่กำหนด ฝึกการตอบสนอง (reaction) ความคล่องแคล่ว (agility) และความฟิตโดยรวม",
            steps: [
                "วางกรวยเป็นรูปสี่เหลี่ยมจัตุรัส โดยกรวยแต่ละอันห่างกัน 9 เมตร โดยมีกรวยตรงกลาง 1 อัน และกรวยมุมทั้ง 4 ด้านอีก 4 อัน",
                "ให้เริ่มจากกรวยใดกรวยหนึ่ง และวิ่งไปข้างหน้าแตะกรวยตรงกลาง",
                "หลังจากแตะกรวยตรงกลางแล้ว ให้วิ่งถอยหลังกลับมายังกรวยที่เริ่มต้น",
                "จากนั้นสไลด์ไปด้านข้าง ไปยังกรวยที่อยู่ถัดไป",
                "ทำตามขั้นตอนเดิม จนกว่าจะครบทุกกรวย"
            ],
            tips: [
                "ฝึกเปลี่ยนทิศหลายแบบ (หน้า หลัง ข้าง)",
                "โฟกัสที่การเคลื่อนตัวเร็วแต่แม่นยำ",
                "ใช้สายตาประเมินกรวยตลอดเวลา"
            ],
            videoUrl: "https://youtu.be/-ljtN_Ae02Y",
            videoType: "youtube"
        },
        {
            id: 13,
            title: "ตาราง 9 ช่อง (Nine square-Step)",
            description: "พัฒนาการเคลื่อนไหวของสเต็ปเท้า",
            fullDescription: "การก้าวเท้าในตาราง 9 ช่อง (เหมือน speed ladder) ฝึกฝีเท้า (footwork) การประสานงานของร่างกาย (coordination) และการควบคุมการเคลื่อนไหว",
            steps: [
                "วาด แปะเทป หรือตั้งตาราง 3x3 บนพื้น",
                "ก้าวเท้าซ้ายไปยังช่องที่ 3 และก้าวเท้าขวาตามไปยังช่องที่ 3",
                "ก้าวเท้าซ้ายไปยังช่องที่ 4 และก้าวเท้าขวาไปยังช่องที่ 5",
                "ก้าวเท้าซ้ายกลับมาช่องที่ 3 และก้าวเท้าขวากลับมาช่องที่ 3",
                "ก้าวเท้าซ้ายกลับลงมาช่องที่ 1 ละก้าวเท้าขวากลับลงมาช่องที่ 2",
                "จากนั้นให้ปฏิบัติตามขั้นตอนที่กล่าวมาในข้างต้นต่อเนื่องกันไป"
            ],
            tips: [
                "ก้าวเท้าให้ตรงช่อง ไม่เหยียบเส้น",
                "เริ่มจากช้าแล้วเพิ่มความเร็วขึ้นเมื่อชำนาญ",
                "เน้นจังหวะและความแม่นยำมากกว่าความเร็วตอนแรก"
            ],
            videoUrl: "https://youtu.be/dWxUl_FXCyw",
            videoType: "youtube"
        }
    ],
    quickness: [
        {
            id: 14,
            title: "การลุกยืน (Four-Point Pop-Up)",
            description: "ฝึกกระบวนการทางจิตใจของการเคลื่อนไหวร่วมกันของร่างกาย ความเร็วความคล่องตัว และความไว",
            fullDescription: "เป็นท่าเริ่มต้นที่ฝึกการเปลี่ยนจากท่านอนหรือหมอบขึ้นมายืนอย่างรวดเร็วใช้พัฒนาความเร็วในการตอบสนอง (reaction speed) และการระเบิดพลัง (explosiveness) ของร่างกาย",
            steps: [
                "เริ่มจากท่านอนคว่ำ มือและเท้าแตะพื้นในท่าเตรียม",
                "เมื่อได้รับสัญญาณ ให้รีบลุกขึ้นยืนอย่างรวดเร็ว"
            ],
            tips: [
                "โฟกัสที่การเคลื่อนที่ลำตัวขึ้นอย่างมั่นคง ไม่เสียสมดุล",
                "เก็บคางเล็กน้อย ป้องกันคอเคล็ด",
                "ใช้ขาและสะโพกขับแรง ไม่ใช่แค่หลัง"
            ],
            videoUrl: "https://youtu.be/iLB99wG9Op8",
            videoType: "youtube"
        },
        {
            id: 15,
            title: "Lying Start - on Back",
            description: "ฝึกกระบวนการทางจิตใจ ความเร็ว ความไวและความคล่องตัวของการเคลื่อนไหวโดยการฟังค้าสั่งหรือสัญญาณ",
            fullDescription: "เป็นท่าที่ฝึกการออกตัวจากท่านอนหงาย การเปลี่ยนจากท่าพักสู่การเคลื่อนที่เร็ว เสริมการตอบสนองและความคล่องตัว",
            steps: [
                "นอนหงายบนพื้น แขนแนบขนานลำตัวปลายเท้าชิด",
                "รอฟังสัญญาณจากผู้ฝึก",
                "เมื่อได้ยินสัญญาณจากผู้ฝึก ให้รีบลุกขึ้นกลับตัวแล้วออกวิ่งไปในทิศทางเดียวกับศรีษะ"
            ],
            tips: [
                "เน้นการผลักพื้นและลุกขึ้นให้เร็วที่สุด",
                "เก็บไหล่และลำตัวให้สมดุล เพื่อไม่เสียจังหวะตอนออกตัว",
                "เหมาะสำหรับการฝึกนักกีฬาที่ต้องใช้สปีดสั้นๆ เช่น ฟุตซอลหรือบาสเกตบอล"
            ],
            videoUrl: "https://youtu.be/BLW5IF8ZKxg",
            videoType: "youtube"
        },
        {
            id: 16,
            title: "ก้าวข้ามด้านข้าง (Lateral Weave)",
            description: "ฝึกความไวของเท้าในการเคลื่อนไหว",
            fullDescription: "เป็นการเคลื่อนที่ด้านข้างแบบสลับเพื่อฝึกการเคลื่อนไหวเชิงข้าง (lateral movement) ความคล่องตัว และการควบคุมทิศทาง",
            steps: [
                "เริ่มต้นยืนด้วยเท้าทั้งสองข้าง",
                "ก้าวข้ามรั้วทางด้านข้างด้วยความรวดเร็ว",
                "เมื่อก้าวข้ามถึงรั้วอันสุดท้าย ให้ก้าวข้ามรั้วกลับมาที่จุดเริ่มต้น",
                "เมื่อถึงจุดเริ่มต้น ให้วิ่งต่อด้วยความเร็วจนถึงจุดที่กำหนด"
            ],
            tips: [
                "รักษาระดับลำตัวไม่แกว่งมากเกินไป",
                "ก้าวขาให้มั่นคงและเร็ว อย่าไขว้ขาเกินไปจนเสียสมดุล",
                "ใช้สายตาควบคู่กับการเคลื่อนไหว เพื่อพัฒนาการประสานงาน"
            ],
            videoUrl: "https://youtu.be/HrjMHocST7c",
            videoType: "youtube"
        },
        {
            id: 17,
            title: "วิ่งเปลี่ยนทิศทางเก็บมาร์คเกอร์",
            description: "ฝึกความไวในการเคลื่อนที่เปลี่ยนทิศทางในหลายรูปแบบ",
            fullDescription: "เน้นการฝึกการเปลี่ยนทิศทางอย่างรวดเร็ว (agility & change of direction) พร้อมกับการสังเกตเป้าหมาย (marker)",
            steps: [
                "วางมาร์คเกอร์หลายจุดตามพื้นที่",
                "เมื่อได้สัญญาณเริ่มให้ผู้ฝึกวิ่งเคลื่อนที่ไปแตะกรวยที่อยู่ตรงกลาง",
                "จากนั้นวิ่งไปหยิบมาร์คเกอร์ และกลับมาวางไว้ที่กรวย",
                "ปฏิบัติจนครบทุกมาร์คเกอร์"
            ],
            tips: [
                "ฝึกการหยุดและเปลี่ยนทิศทางโดยไม่เสียแรงส่ง",
                "เก็บลำตัวต่ำขณะเปลี่ยนทิศทางเพื่อควบคุมแรง",
                "ใช้สายตาโฟกัสกับมาร์คเกอร์พร้อมกับการเคลื่อนไหว"
            ],
            videoUrl: "https://youtu.be/8VU0KUq0Zt8",
            videoType: "youtube"
        },
        {
            id: 18,
            title: "Cone Drill Hand Touch",
            description: "ฝึกปฏิกิริยาการตอบสนอง",
            fullDescription: "การเคลื่อนไหวรอบกรวยพร้อมแตะด้วยมือ ใช้ฝึกความเร็ว ความคล่องตัว และการประสานงานระหว่างมือ ตา และเท้า",
            steps: [
                "ยืนท่าเตรียม ก้มตัวเล็กน้อย พร้อมที่จุดเริ่ม",
                "รอฟังสัญญาณจากผู้ฝึก",
                "เมื่อได้ยินสัญญาณจากผู้ฝึกให้รีบปฏิบัติตาม โดยเคลื่อนตัววิ่งหรือสไลด์ไปแตะมาร์คเกอร์ตามที่ผู้ฝึกให้สัญญาณ ด้วยมือ",
                "จากนั้นให้รีบกลับมายังจุดเริ่มพร้อมยืนท่าเตรียมเช่นเดิม และรอฟังสัญญาณจากผู้ฝึกต่อไป"
            ],
            tips: [
                "รักษาท่าลำตัวต่ำเพื่อควบคุมการทรงตัว",
                "ใช้แขนช่วยบาลานซ์ ไม่เอนลำตัวเกินไป",
                "โฟกัสที่ความแม่นยำในการแตะ ไม่ใช่แค่ความเร็ว"
            ],
            videoUrl: "https://youtu.be/InW-6dbgDsk",
            videoType: "youtube"
        },
        {
            id: 19,
            title: "Cone Drill Foot Touch",
            description: "ฝึกปฏิกิริยาการตอบสนอง",
            fullDescription: "คล้ายกับ Hand Touch แต่เปลี่ยนเป็นการแตะด้วยเท้า ใช้ฝึกการควบคุมขา ความคล่องตัว และความแม่นยำของการเคลื่อนไหว",
            steps: [
                "ยืนท่าเตรียม แยกเท้าก้มตัวเล็กน้อย พร้อมที่จุดเริ่ม",
                "รอฟังสัญญาณจากผู้ฝึก",
                "เมื่อได้ยินสัญญาณจากผู้ฝึกให้รีบปฏิบัติตาม โดยเคลื่อนตัววิ่งหรือสไลด์ไปแตะมาร์คเกอร์ตามที่ผู้ฝึกให้สัญญาณ ด้วยปลายเท้า (เบาๆ)",
                "จากนั้นให้รีบกลับมายังจุดเริ่มพร้อมยืนท่าเตรียมเช่นเดิม และรอฟังสัญญาณจากผู้ฝึกต่อไป"
            ],
            tips: [
                "แตะเบา ๆ ไม่ออกแรงแตะกรวยมากเกินไป",
                "ควบคุมจังหวะขาให้ต่อเนื่อง ไม่หยุดชะงัก",
                "เน้นการใช้ปลายเท้าและการก้าวอย่างมั่นคง"
            ],
            videoUrl: "https://youtu.be/BGK7RQ0mxk4",
            videoType: "youtube"
        },
        {
            id: 20,
            title: "Traffic Lights Visual Reaction",
            description: "ฝึกความไวและฝึกปฏิกิริยาการตอบสนอง",
            fullDescription: "เกมฝึกการตอบสนองตามสัญญาณ พัฒนาทั้งสมาธิ (focus) การตัดสินใจเร็ว (decision making) และagility",
            steps: [
                "ผู้ฝึกยืนเตรียมตัว รอฟังสัญญาณจากผู้ฝึกและสายตามองผู้ฝึก",
                "เมื่อผู้ฝึกให้สัญญาณเสียงโดยการพูด หรือใช้สัญลักษณ์ในการชูมาร์คเกอร์ให้ปฏิบัติตาม เช่น มาร์คเกอร์สีน้้าเงิน-วิ่งไปข้างหน้า มาร์คเกอร์สีส้ม-แตะที่พื้น มาร์คเกอร์สีเหลือง-วิ่งถอยหลัง",
                "เมื่อปฏิบัติตามสัญญาณเสียงหรือสัญลักษณ์ที่ผู้ฝึกชูให้ดูแล้วรีบกลับมายังท่าเตรียม อย่างรวดเร็ว"
            ],
            tips: [
                "จดจ่อกับสัญญาณให้ดี ฝึกการตอบสนองทันที",
                "ฝึกเปลี่ยนจากการเคลื่อนไหวเร็วไปสู่การหยุดนิ่งอย่างมั่นคง",
                "สามารถปรับสัญญาณเป็นคำพูดหรือท่าทางได้เพื่อเพิ่มความท้าทาย"
            ],
            videoUrl: "https://youtu.be/MjBbl7GSncM",
            videoType: "youtube"
        }
    ]
};

//คำอธิบายsaq
const categoryDescriptions = {
    speed: "การฝึกความเร็ว เป็นความสามารถในการเคลื่อนที่ตามเป้าหมายที่ต้องการลักษณะของความสามารถสูงสุด โดยเป็นการทำงานระหว่างระบบประสาทและกล้ามเนื้อ",
    agility: "การฝึกความสามารถในการเคลื่อนไหวที่มีการเปลี่ยนทิศทางความเร็วและรูปแบบได้อย่างรวดเร็วตามสิ่งเร้าที่กำหนด",
    quickness: "การฝึกการตอบสนองในการปรับเปลี่ยนจังหวะในการเคลื่อนไหวได้อย่างรวดเร็วฉับพลันทันทีทันใด"
};

const categoryLabels = {
    speed: "Speed",
    agility: "Agility", 
    quickness: "Quickness"
};

//ดึงรหัสจากyoutube Url
function getYouTubeVideoId(url) {
    if (!url) return null;
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
}

//embed Url
function getYouTubeEmbedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}`;
}

//แอพ
const AppState = {
    currentPage: 'main',
    currentCategory: null,
    currentExercise: null,
    
    navigateToPage(pageName, data = null) {
        this.currentPage = pageName;
        
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        setTimeout(() => {
            const targetPage = document.getElementById(`${pageName}Page`);
            targetPage.classList.add('active', 'fade-in');
            
            setTimeout(() => {
                targetPage.classList.remove('fade-in');
            }, 500);
        }, 100);
        
        const backBtn = document.getElementById('backBtn');
        backBtn.style.display = pageName === 'main' ? 'none' : 'flex';
        
        switch(pageName) {
            case 'exercises':
                this.currentCategory = data;
                this.loadExercisesList(data);
                break;
            case 'detail':
                this.currentExercise = data;
                this.loadExerciseDetail(data);
                break;
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    
    loadExercisesList(category) {
        const categoryTitles = {
            speed: 'Speed (S) - การฝึกความเร็ว',
            agility: 'Agility (A) - การฝึกความคล่องแคล่ว',
            quickness: 'Quickness (Q) - การฝึกความว่องไว'
        };
        
        document.getElementById('categoryTitle').textContent = categoryTitles[category];
        document.getElementById('categoryDescription').textContent = categoryDescriptions[category];
        
        const list = document.getElementById('exercisesList');
        list.innerHTML = '';
        
        exercisesData[category].forEach((exercise, index) => {
            const card = document.createElement('div');
            card.className = 'exercise-card';
            card.style.animationDelay = `${index * 0.1}s`;
            card.innerHTML = `
                <h3>${exercise.title}</h3>
                <p>${exercise.description}</p>
                <button class="view-detail-btn" data-id="${exercise.id}">
                    ดูรายละเอียด →
                </button>
            `;
            list.appendChild(card);
        });
    },
    
    loadExerciseDetail(exercise) {
        document.getElementById('exerciseTitle').textContent = exercise.title;
        document.getElementById('exerciseCategory').textContent = categoryLabels[this.currentCategory];
        document.getElementById('exerciseDescription').textContent = exercise.fullDescription;

        //โหลดวิดีโอ
        this.loadVideo(exercise);
        
        //โหลดขั้นตอน
        const stepsContainer = document.getElementById('exerciseSteps');
        stepsContainer.innerHTML = exercise.steps.map(step => `<li>${step}</li>`).join('');
        
        //โหลดคำแนะนำ
        const tipsContainer = document.getElementById('exerciseTips');
        tipsContainer.innerHTML = exercise.tips.map(tip => `<li>${tip}</li>`).join('');
    },

    loadVideo(exercise) {
        const videoContainer = document.getElementById('videoContainer');
        const placeholder = document.getElementById('videoPlaceholder');
        
        videoContainer.innerHTML = '';
        
        if (!exercise.videoUrl || exercise.videoUrl.trim() === '') {
            videoContainer.style.display = 'none';
            placeholder.style.display = 'flex';
            return;
        }

        const videoType = exercise.videoType || 'local'; // Default to local if not specified
        
        if (videoType === 'youtube') {
            const videoId = getYouTubeVideoId(exercise.videoUrl);
            
            if (videoId) {
                const embedUrl = getYouTubeEmbedUrl(videoId);
                videoContainer.innerHTML = `
                    <iframe 
                        width="100%" 
                        height="300" 
                        src="${embedUrl}" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                `;
                videoContainer.style.display = 'block';
                placeholder.style.display = 'none';
            } else {
                //ลิงค์ไม่ถูก
                videoContainer.style.display = 'none';
                placeholder.style.display = 'flex';
                placeholder.innerHTML = `
                    <div style="text-align: center;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 2em; color: #ff6b6b; margin-bottom: 10px;"></i>
                        <p>Invalid YouTube URL</p>
                        <small style="color: #666;">${exercise.videoUrl}</small>
                    </div>
                `;
            }
        } else {
            //local
            videoContainer.innerHTML = `
                <video id="exerciseVideo" controls style="width: 100%; border-radius: 8px;">
                    <source src="${exercise.videoUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
            videoContainer.style.display = 'block';
            placeholder.style.display = 'none';
            
            //error
            const video = videoContainer.querySelector('video');
            video.onerror = () => {
                videoContainer.style.display = 'none';
                placeholder.style.display = 'flex';
                placeholder.innerHTML = `
                    <div style="text-align: center;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 2em; color: #ff6b6b; margin-bottom: 10px;"></i>
                        <p>Video file not found</p>
                        <small style="color: #666;">${exercise.videoUrl}</small>
                    </div>
                `;
            };
        }
    }
};

//ฟังค์ชั่นการทำงานของปุ่ม
document.addEventListener('DOMContentLoaded', () => {
    
    //ทำปุ่มเลือกหมวดหมู่
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const category = card.dataset.category;
            AppState.navigateToPage('exercises', category);
        });
    });
    
    //ทำปุ่มดูรายละเอียด
    document.getElementById('exercisesList').addEventListener('click', (e) => {
        if (e.target.classList.contains('view-detail-btn')) {
            e.preventDefault();
            const exerciseId = parseInt(e.target.dataset.id);
            const exercise = exercisesData[AppState.currentCategory]
                .find(ex => ex.id === exerciseId);
            if (exercise) {
                AppState.navigateToPage('detail', exercise);
            }
        }
    });

    //ทำปุ่มดูออกกำลังกาย
    document.querySelectorAll('.view-exercises').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const category = button.dataset.category;
            AppState.navigateToPage('exercises', category);
        });
    });
    
    //ทำปุ่มย้อนกลับ
    document.getElementById('backBtn').addEventListener('click', (e) => {
        e.preventDefault();
        if (AppState.currentPage === 'detail') {
            AppState.navigateToPage('exercises', AppState.currentCategory);
        } else {
            AppState.navigateToPage('main');
        }
    });
    
    //เพิ่มการทำงานของkeyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && AppState.currentPage !== 'main') {
            if (AppState.currentPage === 'detail') {
                AppState.navigateToPage('exercises', AppState.currentCategory);
            } else {
                AppState.navigateToPage('main');
            }
        }
    });
});

console.log("Wow! You opened console.");
console.log("This project is a part of my research to impove my coding skills, if you have any suggestions, please contact me down below!");
console.log("Hello! This is Geo ( Puttanapong Punyaputtanapong ). If you wanted to contact me, add me on discord : geonakrup");
console.log("This project is done now btw, but I will keep updating it if I have any new ideas, or if I found any bugs or errors. lol")
console.log("Last edited on 16/09/2024 19:14 (By Geo, of course :P)");