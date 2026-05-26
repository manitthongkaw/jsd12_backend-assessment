# My Understanding

## Submission Links

**Loom Video (must be set to public — anyone with the link):**
[paste your Loom video URL here]

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

---

**5. What is middleware? Describe what it does in your own words and give one example from your code.**

*Your answer:*

---

**6. Why does the order of middleware matter in Express? What could go wrong if it were in the wrong order?**

*Your answer:*

---

**7. Walk through what happens on the server, step by step, when a POST request is sent to `/products`.**

*Your answer:*

---

**8. What is CRUD? Map each operation to the HTTP method and route you used in your API.**

*Your answer:*

---

**9. How does your API respond when something goes wrong — for example, when a product with a given ID does not exist?**

*Your answer:*

---

**10. What was the hardest part of building this API and what did you do to get past it?**

*Your answer:*
