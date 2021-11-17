<template>
    <div>
        <p>
            Hello, {{ personName}}
        </p>
        <p>
        </p>    
    </div>    
    
</template>

<script>
 export default {
        name: 'PersonGreeter',
        props: {
          personName: String,  
        }
    }
</script>
   
<style>

</style>
