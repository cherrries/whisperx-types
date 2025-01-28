# whisperx-types

TypeScript type definitions for WhisperX CLI options and transcript output.

## Installation

```bash
npm install whisperx-types
```

## Usage

### CLI Options

```typescript
import { WhisperXOptions } from 'whisperx-types';

const options: WhisperXOptions = {
  model: 'small',
  language: 'en',
  diarize: true,
  output_format: 'json'
};
```

### Transcript Types

```typescript
import { WhisperXTranscript } from 'whisperx-types';

// Parse WhisperX JSON output
const transcript: WhisperXTranscript = JSON.parse(whisperXOutput);

// Access transcript data with full type safety
transcript.segments.forEach(segment => {
  console.log(`[${segment.start} -> ${segment.end}] ${segment.text}`);
  
  segment.words.forEach(word => {
    console.log(`Word: ${word.word}, Score: ${word.score}`);
  });
});
```

## Type Definitions

### CLI Options

- `WhisperXOptions`: Complete CLI options interface
- `WhisperXLanguage`: Supported language codes
- `WhisperXComputeType`: Compute types (float16, float32, int8)
- `WhisperXOutputFormat`: Output format options
- `WhisperXTask`: Task types (transcribe, translate)
- `WhisperXInterpolateMethod`: Word interpolation methods
- `WhisperXSegmentResolution`: Segment resolution options

### Transcript Output

- `WhisperXTranscript`: Complete transcript interface
- `WhisperXSegment`: Segment information interface
- `WhisperXWord`: Word-level information interface

## License

MIT 