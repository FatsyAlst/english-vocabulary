import { mediaData, vocabularyData } from './src/lib/vocabularyData';
import { MEDIA_TITLES } from './src/lib/constant';

console.log('🔍 Checking data consistency...\n');

let errors = 0;
let warnings = 0;

// Check 1: All word IDs in words array have corresponding definitions
console.log('1️⃣ Checking for missing word definitions...');
for (const [mediaId, media] of Object.entries(mediaData)) {
  const missingWords = media.words.filter(wordId => !vocabularyData[wordId]);
  if (missingWords.length > 0) {
    console.error(`  ❌ ${mediaId}: Missing definitions for: ${missingWords.join(', ')}`);
    errors += missingWords.length;
  }
}
if (errors === 0) {
  console.log('  ✅ All word IDs have definitions');
}

// Check 2: Vocabulary counts match actual word counts
console.log('\n2️⃣ Checking vocabulary counts...');
for (const [mediaId, media] of Object.entries(mediaData)) {
  const actualCount = media.words.length;
  if (media.vocabularyCount !== actualCount) {
    console.error(`  ❌ ${mediaId}: Count mismatch - declared: ${media.vocabularyCount}, actual: ${actualCount}`);
    errors++;
  }
}
if (errors === 0) {
  console.log('  ✅ All vocabulary counts are accurate');
}

// Check 3: MEDIA_TITLES counts match mediaData
console.log('\n3️⃣ Checking MEDIA_TITLES consistency...');
for (const title of MEDIA_TITLES) {
  const media = mediaData[title.id];
  if (!media) {
    console.error(`  ❌ ${title.id}: Not found in mediaData`);
    errors++;
  } else if (title.vocabularyCount !== media.vocabularyCount) {
    console.error(`  ❌ ${title.id}: Count mismatch - constant.ts: ${title.vocabularyCount}, vocabularyData.ts: ${media.vocabularyCount}`);
    errors++;
  }
}
if (errors === 0) {
  console.log('  ✅ MEDIA_TITLES matches mediaData');
}

// Check 4: Duplicate word IDs across different media
console.log('\n4️⃣ Checking for duplicate word IDs across media...');
const allWordIds = new Set<string>();
for (const [mediaId, media] of Object.entries(mediaData)) {
  for (const wordId of media.words) {
    if (allWordIds.has(wordId)) {
      console.warn(`  ⚠️  Word ID "${wordId}" appears in multiple media`);
      warnings++;
    }
    allWordIds.add(wordId);
  }
}
if (warnings === 0) {
  console.log('  ✅ No duplicate word IDs');
}

// Check 5: Orphaned vocabulary entries
console.log('\n5️⃣ Checking for orphaned vocabulary entries...');
const usedWordIds = new Set(
  Object.values(mediaData).flatMap(media => media.words)
);
const allVocabIds = Object.keys(vocabularyData);
const orphanedWords = allVocabIds.filter(id => !usedWordIds.has(id));
if (orphanedWords.length > 0) {
  console.warn(`  ⚠️  ${orphanedWords.length} orphaned vocabulary entries: ${orphanedWords.slice(0, 10).join(', ')}${orphanedWords.length > 10 ? '...' : ''}`);
  warnings += orphanedWords.length;
}
if (warnings === 0) {
  console.log('  ✅ No orphaned vocabulary entries');
}

// Summary
console.log('\n' + '='.repeat(50));
if (errors === 0 && warnings === 0) {
  console.log('✅ All checks passed! Ready for deployment.');
} else {
  if (errors > 0) {
    console.error(`❌ Found ${errors} error(s) that must be fixed before deployment.`);
  }
  if (warnings > 0) {
    console.warn(`⚠️  Found ${warnings} warning(s) to review.`);
  }
}

process.exit(errors > 0 ? 1 : 0);
