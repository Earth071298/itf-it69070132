// ข้อมูลอาหารไทยอย่างน้อย 8 เมนู
const foodMenu = [
  {
    id: 1,
    name: "ผัดกะเพราไก่",
    description: "เมนูยอดนิยมของไทย ใส่ใบกะเพรา พริก กระเทียม ราดด้วยข้าวร้อนๆ",
    price: 45,
    image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    name: "ต้มยำกุ้ง",
    description: "ซุปเผ็ดร้อนจากตะไคร้ ใบมะกรูด พริกขี้หนู และกุ้งสด",
    price: 120,
    image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    name: "แกงเขียวหวานไก่",
    description: "แกงเขียวหวานรสเข้มข้น กับมะเขือเปราะ พริกชี้ฟ้า ใบโหระพา",
    price: 65,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    name: "ผัดไทยกุ้งสด",
    description: "เส้นจันทน์ผัดกับกุ้งสด ถั่วงอก ไชโป๊วไข่ โรยถั่วลิสงบด",
    price: 55,
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=400&fit=crop"
  },
  {
    id: 5,
    name: "ส้มตำไทย",
    description: "ส้มตำรสเปรี้ยว หวาน เค็ม เผ็ด ด้วยมะละกอสับ ถั่วฝักยาว มะเขือเทศ",
    price: 40,
    image: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=800&h=400&fit=crop"
  },
  {
    id: 6,
    name: "ข้าวมันไก่",
    description: "ข้าวหอมมันกับเนื้อไก่นุ่ม น้ำจิ้มรสเด็ด และซุปไก่",
    price: 40,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=400&fit=crop"
  },
  {
    id: 7,
    name: "ผัดซีอิ๊วหมู",
    description: "เส้นใหญ่ผัดกับหมูหมัก ซีอิ๊วหวาน บรอกโคลี และไข่",
    price: 50,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=400&fit=crop"
  },
  {
    id: 8,
    name: "ข้าวผัดกุ้ง",
    description: "ข้าวผัดกับกุ้งสด ผักรวม ไข่ และเครื่องปรุงรสกลมกล่อม",
    price: 50,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=400&fit=crop"
  }
];

// ฟังก์ชันสุ่มอาหาร
function getRandomFood() {
  const randomIndex = Math.floor(Math.random() * foodMenu.length);
  return foodMenu[randomIndex];
}

// ฟังก์ชันแสดงผลอาหาร
function displayFood(food) {
  const foodImage = document.getElementById('foodImage');
  const foodName = document.getElementById('foodName');
  const foodPrice = document.getElementById('foodPrice');
  const foodDescription = document.getElementById('foodDescription');
  const foodCard = document.getElementById('foodCard');
  
  // เพิ่มเอฟเฟกต์ shake
  foodCard.classList.add('shake-animation');
  
  // เปลี่ยนข้อมูลหลังจากแอนิเมชั่นเล็กน้อย
  setTimeout(() => {
    foodImage.src = food.image;
    foodImage.alt = food.name;
    foodName.textContent = food.name;
    foodPrice.textContent = `฿${food.price}`;
    foodDescription.textContent = food.description;
    
    // ลบเอฟเฟกต์ shake
    setTimeout(() => {
      foodCard.classList.remove('shake-animation');
    }, 300);
  }, 150);
}

// เมื่อโหลดหน้าเว็บเสร็จ
document.addEventListener('DOMContentLoaded', function() {
  const randomBtn = document.getElementById('randomBtn');
  
  // แสดงอาหารแรกเมื่อโหลดหน้า
  const initialFood = getRandomFood();
  displayFood(initialFood);
  
  // เมื่อกดปุ่มสุ่มอาหาร
  randomBtn.addEventListener('click', function() {
    const randomFood = getRandomFood();
    displayFood(randomFood);
    
    // เลื่อนไปที่การ์ดอาหาร
    document.getElementById('foodCard').scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest' 
    });
  });
  
  // เพิ่มเอฟเฟกต์เมื่อคลิกปุ่ม
  randomBtn.addEventListener('mousedown', function() {
    this.style.transform = 'translateY(-1px) scale(0.98)';
  });
  
  randomBtn.addEventListener('mouseup', function() {
    this.style.transform = 'translateY(-3px) scale(1.05)';
  });
  
  randomBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});
