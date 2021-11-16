<template>
  <div>
    <!-- START SLIDER -->
    <AppSlider />
    <!-- END SLIDER -->

    <!-- START SORT AND SEARCH -->
    <AppSortAndSearch>
      <!-- SLOTS -->
      <!-- ----- -->
      <!-- SORT BY CITY -->
      <AppSelect
        v-bind="{ data: citySort, type: 'btn' }"
        @userSelected="userSelectedCity"
      />
      <!-- OTHER SORT -->
      <AppSelect
        v-bind="{ data: otherSort, type: 'btn' }"
        @userSelected="userSelectedOther"
      />
    </AppSortAndSearch>
    <!-- END SORT AND SEARCH -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      citySort: {
        title: 'مكة المكرمة',
        content: [
          {
            link: '/',
            name: 'الرياض',
          },
          {
            link: '/',
            name: 'الدمام',
          },
        ],
      },
      otherSort: {
        title: 'كل الحراج',
        content: [
          {
            link: '/',
            name: 'كل الحراج',
          },
          {
            link: '/',
            name: 'كل الحراج',
          },
        ],
      },
      userSelectedCity: '',
      userSelectedOther: '',
    }
  },
  head() {
    return {
      title: 'الصفحة الرئيسية',
    }
  },
}
</script>
