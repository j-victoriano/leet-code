let merge = (nums1, m, nums2, s) => {
    // Merge has to be assorted in a non-decreasing order
    //sort out any numbers that are equal to zero, then add them to nums1
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j>=0) {
        if (i>=0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
}