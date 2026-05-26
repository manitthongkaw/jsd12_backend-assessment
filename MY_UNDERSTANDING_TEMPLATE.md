# My Understanding

## Submission Links

**Loom Video (must be set to public — anyone with the link):**
[paste your Loom video URL here]
https://www.loom.com/share/f010e667dcca4c9d81ad850f47a261bb

---

## Questions

Answer each question in your own words. There are no trick questions.

The goal is not a perfect answer — it is an honest one. Write as if you are explaining to a friend who has never used Express. Completing this will prepare you for your video walkthrough.

Do not copy from documentation, your code comments, or AI output. If you are unsure about something, write what you do understand and note where the gap is.

---

**1. What does each HTTP method in your API mean — GET, POST, PUT or PATCH, and DELETE? Why do we use different methods instead of just using POST for everything?**

*Your answer:*
- Get ใช้สำหรับเรียก รับข้อมูลจาก server ไปแสดงบน Client browser ที่เรียกขอข้อมูล
- Post ใช้สำหรับส่งข้อมูลมายัง server แล้วเพิ่มข้อมูลลง Database
- Put ใช้สำหรับส่งข้อมูลมายัง server โดยโครงสร้างข้อมูลต้องตรงกับข้อมูลใน Database ทั้งก้อน แล้วแก้ไขข้อมูลใน Database
- Patch ใช้สำหรับส่งข้อมูลมายัง server โดยโครงสร้างข้อมูลบางส่วนตรงกับข้อมูลใน Database เพื่อแก้ไขข้อมูลใน Database
- Delete ใช้สำหรับลบข้อมูลใน Database โดยส่วนใหญ่ใช้ id เพื่อระบุบว่าจะลบข้อมูลตัวไหนครับ

- ที่ไม่สามารถใช้แค่ Post อย่างเดียวได้ เพราะ ถ้าระบุบ routes/req header มาไม่ตรง api ที่ยิงมาจะไม่ทำงานครับ

---

**2. What is `express.json()` and what would happen if you left it out?**

*Your answer:*
- ถ้าไม่ใช้ จะไม่สามารถรับ req.body ที่เป็น json จาก Client browser ที่ส่งมาได้
- ถ้ามีการ Post ด้วย Content-Type: application/json มา server ก็จะ catch (error) ออกมา แทนที่จะทำงาน แล้วสร้างข้อมูลลง Database ครับ 

---

**3. What is the difference between `req.body`, `req.params`, and `req.query`? Give a real example from your API for each one.**

*Your answer:*
- req.body คือ ข้อมูลที่ส่งมาจาก Client browser เช่น แบบฟอร์มที่กรอก หรือการเปลี่ยนแปลงค่าที่เรากำหนดจาก Client browser แล้วส่งมาให้ทาง server
- req.params คือ ข้อความ/ตัวเลข/:id แล้วแต่เราจะกำหนด ที่ส่งมากับ url/parameter ที่ส่งจาก Client browser กลับมาที่ server
- req.query คือ ข้อความ/ตัวเลข ที่ส่งมากับ url แต่รูปแบบจะต่างจาก params เช่น url/?key=value ครับ

---

**4. What are HTTP status codes? List every status code you used in your API and explain why you chose it for that situation.**

*Your answer:*
- เป็นการบอกสถานะผลลัพธ์การทำงานของแต่ละงานที่ทำ
- 200 ใช้กับการทำงานที่สำเร็จ
- 201 ใช้กับการสร้างข้อมูลใหม่สำเร็จ
- 400 ใช้กับการเกิดข้อผิดพลาด ที่เกิดจาก Client ส่งข้อมูลมาผิด/ไม่ครบ/ไม่ตรงตามที่กำหนดครับ
- 404 หาข้อมูลไม่พบ

---

**5. What is middleware? Describe what it does in your own words and give one example from your code.**

*Your answer:*
- Middleware คือฟังชั่นที่ทำงานระหว่าง Client กับ Server เพื่อป้องกัน/ลดปัญหาบางอย่างที่จะเกิดขึ้น ตามที่เรากำหนดไว้ เช่น การเช็ค jwt/cookie/token ครับ
- เมื่อมี req จาก Client เข้ามาที่ Server ก็จะต้องผ่าน Middleware ก่อน ซึ่งอาจมีได้หลายตัว
- เมื่อผ่านแต่ละตัวตามลำดับทั้งหมดแล้ว ถึงจะไปที่ Server เพื่อทำงาน CRUD ต่อไปครับ

---

**6. Why does the order of middleware matter in Express? What could go wrong if it were in the wrong order?**

*Your answer:*
- Server อาจ crash / ทำงานผิดปกติ / โดนเจาะระบบครับ

---

**7. Walk through what happens on the server, step by step, when a POST request is sent to `/products`.**

*Your answer:*
- แกะเอาข้อมูลใน body ที่ส่งมาจาก req เพื่อนำมาใช้
- เช็คว่ามีที่ไม่มีข้อมูลไหมด้วย if แล้ว return บอก
- try catch คือการดักการทำงาน เพื่อไม่ให้เกิด crash กับ Server
- โดยจะทำงานใน try หากมี error ก็จะกระโดดไปที่ catch
- สร้าง id ด้วยการหาค่า id ที่มากที่สุด แล้ว +1 จากนั้นก็แปลงค่าเป็น String
- นำข้อมูลที่แกะจาก req.body กับ id ที่สร้างมาให้ มารวมไว้ที่ const newProduct
- สร้างข้อมูลใน Database ด้วย push() , newProduct คือข้อมูลใหม่ , products คือข้อมูลทั้งหมดจาก Database
- จากนั้นส่งผลกลับไปให้ Client ด้วย return res

---

**8. What is CRUD? Map each operation to the HTTP method and route you used in your API.**

*Your answer:*
- CRUD คือการทำงาน 4 แบบของ API ที่ใช้ติดต่อกับ Database คือ สร้าง อ่าน อัพเดท และลบข้อมูล
- C สร้าง/เพิ่มข้อมูล - HTTP method คือ post - Route คือ "/products"
- R อ่านข้อมูล - HTTP method คือ get - Route คือ "/products" && "/products/:id"
- U อัพเดทข้อมูล - HTTP method คือ put - Route คือ "/products/:id"
- D ลบข้อมูล - HTTP method คือ delete - Route คือ "/products/:id"

---

**9. How does your API respond when something goes wrong — for example, when a product with a given ID does not exist?**

*Your answer:*
- เมื่อทำการ Get/Put/Delete ด้วย id 0 ที่ไม่มี ก็จะ status(404), "Product not found" เพราะมีเขียนดักไว้แล้วว่า ถ้าไม่มี Product จะต้อง error นี้ครับ

---

**10. What was the hardest part of building this API and what did you do to get past it?**

*Your answer:*
- ผมคิดว่าการทำ middlewares และ error handling คือ ส่วนที่ยากที่สุด เนื่องจากยังมีประสบการณ์การทำ api กันน้อย ทำให้ไม่ทราบว่าจะมี case แบบไหนบ้างที่จะ error/ป้องกันความปลอดภัยได้บ้าง
- การทำโปรเจ็คจริงที่มีลูกค้าเข้ามาใช้งานจริง ๆ จะทำให้เห็นปัญญาตรงที่ได้ชัดเจน/หลากหลายรูปแบบมากขึ้น แล้วเราก็นำไปอัพเดท/ปรับปรุง api ของเราให้มีคุณภาพมากยิ่งขึ้นครับ