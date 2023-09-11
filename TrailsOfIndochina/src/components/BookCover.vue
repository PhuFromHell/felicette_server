<template>
    <div class="book-cover" style="text-align: center; margin: 0; padding: 0;">

        <div>
            <img src="../assets/image/bookcover.jpg" style="width: 100%;">
        </div>
        <!-- <div > -->
            <img src="../assets/image/companyname.jpg" style="margin: 0; padding: 0;">
            <br>
            ITINERARY PROPOSAL CRAFTED FOR
            <br>
            <!-- {{ excelData[0][0].Agent_Name ?? "" }}
            <br><br>
            Booking Name/Code: {{ excelData[0][0].PCM_Name ?? "" }}-SG0208chưa rỏ
            <br><br>
            Prepared on {{ excelData[0][0].Last_Date ?? "" }}
            <br><br>
            Prepared on {{ excelData[0][0].Consultant_Name ?? "" }}, Travel Consultantchưa rỏ -->
        <!-- </div> -->
        
        <br>
    </div>
    <div style="margin: 0; padding: 0;"><img src="../assets/image/bookcoverbottom.jpg" style="width: 100%; height: auto;"></div>
    <!-- <div class="book-cover2 center"> TOUR SUMMARY</div> -->
    <div class="book-cover2">
        <p>TOUR SUMMARY</p>
    </div>

</template>

<script lang="ts">
export default {

    props: ['excelData',],
    watch: {
        excelData: function (newData) {
        },
    },
};


</script>

<style>
.book-cover {
    width: 1100px;
    background-color: #dedace;
    padding-bottom: 0px;
    margin: 0;
}

.book-cover2 {
    width: 1100px;
    background-color: #6b5f3a;
    text-align: center;
    padding: 15px 0;
    height: 50px;
}
</style>