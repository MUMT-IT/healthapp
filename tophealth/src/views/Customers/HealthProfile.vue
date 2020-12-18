<template>
  <div>
    <Nav></Nav>
    <section class="section">
      <div class="container">

        <b-field label="น้ำหนัก">
            <b-input v-model="Weight"></b-input>
        </b-field>
        <b-field label="ส่วนสูง">
            <b-input v-model="Height"></b-input>
        </b-field>

        <b-field label="สูบบุหรี่">
            <b-radio-button v-model="rdtSmoking"
                type="is-success"
                native-value="ไม่สูบ">
                ไม่สูบ
            </b-radio-button>
            <b-radio-button v-model="rdtSmoking"
                type="is-danger"
                native-value="สูบ">
                สูบ
            </b-radio-button>
        </b-field>
        
         <b-field label="ดื่มสุรา">
            <b-radio-button v-model="rdtDrink"
                type="is-success"
                native-value="ไม่ดื่ม">
                ไม่ดื่ม
            </b-radio-button>
            <b-radio-button v-model="rdtDrink"
                type="is-danger"
                native-value="ดื่ม">
                ดื่ม
            </b-radio-button>
        </b-field>

        <b-field label="โรคประจำตัว">
          <section>
            <div class="field">
              <b-checkbox v-model="chkMedication" native-value="ไม่มี"> ไม่มี </b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="chkMedication" native-value="เบาหวาน"> เบาหวาน </b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="chkMedication" native-value="โรคความดันโลหิตสูง">โรคความดันโลหิตสูง</b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="chkMedication" native-value="ภาวะไขมันสูง">ภาวะไขมันสูง</b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="chkMedication" native-value="เป็นมะเร็ง">เป็นมะเร็ง</b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="chkMedication" native-value="โรคตับ">โรคตับ</b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="chkMedication" native-value="วัณโรคปอด">วัณโรคปอด</b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="chkMedication" native-value="มีภาวะซีด/โลหิตจาง">มีภาวะซีด/โลหิตจาง</b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="chkMedication" native-value="โรคหอบหืด">โรคหอบหืด</b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="chkMedication" native-value="โรคเก๊าต์">โรคเก๊าต์ </b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="chkMedication" native-value="โรคต่อมไทรอยด์">โรคต่อมไทรอยด์ </b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="chkMedication" native-value="โรคหัวใจ">โรคหัวใจ</b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="chkMedication" native-value="โรคภูมิแพ้">โรคภูมิแพ้</b-checkbox>
            </div>
            <div class="field">
              <b-checkbox v-model="chkMedication" native-value="กรดไหลย้อน">กรดไหลย้อน </b-checkbox>
            </div>
        </section>
        </b-field>

        <b-field label="โรคประจำตัวอื่นๆ">
            <b-input v-model="txtMedication"></b-input>
        </b-field>

        <b-field label="ท่านมีความเครียด">
              <div class="field">
                <b-radio-button v-model="rbtStressLv" native-value="ไม่เครียด">ไม่เครียด</b-radio-button>
              </div>
              <div class="field">
                <b-radio-button v-model="rbtStressLv" native-value="นานๆครั้ง">นานๆครั้ง</b-radio-button>
              </div>
              <div class="field">
                <b-radio-button v-model="rbtStressLv" native-value="เครียดต้องทานยา">เครียดต้องทานยา</b-radio-button>
              </div>
        </b-field>

        <b-field label="การออกกำลังกาย">
          <section>
            <div class="field">
                <b-radio v-model="rbtExercise" native-value="ไม่ออกกำลังกาย">ไม่ออกกำลังกาย</b-radio>
            </div>
            <div class="field">
                <b-radio v-model="rbtExercise" native-value="ออกกำลังกาย">ออกกำลังกาย</b-radio>
            </div>
            <div class="field">
                <b-radio v-model="rbtExercise" native-value="ออกกำลังกายอย่างน้อย 30 นาที/อาทิตย์">ออกกำลังกายอย่างน้อย 30 นาที/อาทิตย์</b-radio>
            </div>
          </section>
        </b-field>

        <b-field label="ยาที่รับประทานอยู่">
          <section>
              <div class="field">
                  <b-checkbox v-model="chkDrug" native-value="ไม่ใช้ยา">ไม่ใช้ยา</b-checkbox>
              </div>
              <div class="field">
                  <b-checkbox v-model="chkDrug" native-value="ยาแก้ปวด">ยาแก้ปวด</b-checkbox>
              </div>
              <div class="field">
                  <b-checkbox v-model="chkDrug" native-value="มียาสำหรับโรคที่เป็นอยู่">มียาสำหรับโรคที่เป็นอยู่</b-checkbox>
              </div>
              <div class="field">
                  <b-checkbox v-model="chkDrug" native-value="อาหารเสริม">อาหารเสริม</b-checkbox>
              </div>
              <div class="field">
                  <b-checkbox v-model="chkDrug" native-value="ใช้ฮอร์โมน">ใช้ฮอร์โมน</b-checkbox>
              </div>
          </section>
        </b-field>

        <b-field label="ยาอื่นๆที่รับประทาน">
            <b-input v-model="txtDrug"></b-input>
        </b-field>

        <b-field label="ประวัติโรคประจำตัวของคนในครอบครัว">
          <section>
            <div class="field">
                  <b-checkbox v-model="chkFamilyMed" native-value="เบาหวาน บิดา มารดา">เบาหวาน บิดา มารดา</b-checkbox>
            </div>
            <div class="field">
                  <b-checkbox v-model="chkFamilyMed" native-value="ไขมันสูง บิดา มารดา">ไขมันสูง บิดา มารดา</b-checkbox>
            </div>
            <div class="field">
                  <b-checkbox v-model="chkFamilyMed" native-value="ความดันโลหิตสูง บิดา มารดา">ความดันโลหิตสูง บิดา มารดา</b-checkbox>
            </div>
            <div class="field">
                  <b-checkbox v-model="chkFamilyMed" native-value="เป็นมะเร็ง บิดา มารดา">เป็นมะเร็ง บิดา มารดา</b-checkbox>
            </div>
          </section>
        </b-field>

        <b-field label="ประวัติโรคประตัวอื่นๆของคนในครอบครัว">
            <b-input v-model="txtFamilyMed"></b-input>
        </b-field>

        <button class="button is-success">Save</button>
      </div>
    </section>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  name: "HealthProfile",
  components: {
    Nav
  },
  data() {
    return {
        Weight: null,
        Height: null,
        rdtSmoking: '',
        rdtDrink:'',
        chkMedication: [],
        rbtStressLv: '',
        rbtExercise: '',
        chkDrug:[],
        chkFamilyMed:[],
    }
  },
  methods: {
  
  }
}
</script>

<style scoped>

</style>
